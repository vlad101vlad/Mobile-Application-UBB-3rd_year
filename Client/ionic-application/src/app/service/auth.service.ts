import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, from, Observable} from "rxjs";
import {User} from "../shared/model/user";
import {LoginRequest} from "../shared/model/login";
import {map, switchMap, tap} from "rxjs/operators";
import {JwtToken} from "../shared/model/jwtToken";
import {Storage} from "@capacitor/storage";

export const TOKEN_KEY = 'login-token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
  token = '';

  private backendUrl = 'http://localhost:8443/auth';
  private headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Origin': '*'
  };

  private requestOptions = {
    headers: new HttpHeaders(this.headerDict),
  };

  constructor(private httpClient: HttpClient) {
    this.loadToken();
  }

  registerUser(newUser: User): Observable<User>{
    return this.httpClient.post<User>(
      this.backendUrl + '/register', newUser, this.requestOptions
    );
  }

  async loadToken(){
    const token = await Storage.get({key: TOKEN_KEY});
    if(token && token.value){
      console.log('Set token: ', token.value);
      this.token = token.value;
      this.isAuthenticated.next(true);
    }else{
      this.isAuthenticated.next(false);
    }
  }

  loginUser(username: string, password: string): Observable<any>{
    const loginReq = new LoginRequest(username, password);

    return this.httpClient.post<any>(
      this.backendUrl + '/login', loginReq, this.requestOptions,
    ).pipe(
      map((loginResponse: JwtToken) => loginResponse.jwtToken),
      switchMap(
        token => from(Storage.set({key: TOKEN_KEY, value: token}))
      ),
      tap(_ => {this.isAuthenticated.next(true);})
    );
  }

  logoutUser(): Promise<void>{
    this.isAuthenticated.next(false);
    return Storage.remove({key: TOKEN_KEY});
  }
}
