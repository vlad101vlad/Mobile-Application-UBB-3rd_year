import { Injectable } from '@angular/core';
import {Contest} from '../shared/contest';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContestServiceService {

  private backendUrl = 'http://localhost:8080/contest';
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

  getContests(): Observable<Contest[]> {
    return this.httpClient.get<Contest[]>(this.backendUrl + '/', this.requestOptions);
  }


}
