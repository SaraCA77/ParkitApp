import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  urlUser = `${environment.url}/user`;
  urlQueries = `${environment.url}/queries/query`;

  constructor(public http: HttpClient) { }

  getUserId(data: any) {
    return this.http.get(`${this.urlUser}/${data}`);
  }
}
