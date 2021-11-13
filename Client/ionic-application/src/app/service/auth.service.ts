import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Contest} from "../shared/model/contest";
import {Observable} from "rxjs";
import {User} from "../shared/model/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
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

  constructor(private httpClient: HttpClient) { }

  registerUser(newUser: User): Observable<User>{
    return this.httpClient.post<User>(
      this.backendUrl + '/register', newUser, this.requestOptions
    );
  }
}
