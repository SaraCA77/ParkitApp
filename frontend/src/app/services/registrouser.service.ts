import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistrouserService {

 
  urlRegistroUser = `${environment.url}/registrouser`;
  urlQueries = `${environment.url}/queries/query`;

  constructor(public http: HttpClient) { }


  getRegistroUser() {
    return this.http.get(this.urlRegistroUser);
  }

  setRegistroUser(data: any) {
    return this.http.post(this.urlRegistroUser, data);
  }

  getRegistroUserId(id: string) {
    return this.http.get(`${this.urlRegistroUser}/${id}`);
  }

  putRegistroUser(data: any) {
    return this.http.put(this.urlRegistroUser, data);
  }

  deleteRegistroUser(id: string) {
    return this.http.delete(`${this.urlRegistroUser}/${id}`);
  }
}
