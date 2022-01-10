import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseCreate, ResponseUsers, RequestCreate, ResponseUser, RequestUpdate, ResponseUpdate } from './user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = "https:/reqres.in/api/users";

  constructor(private http: HttpClient) { }

  getUsers() : Observable<ResponseUsers> {
    return this.http.get<ResponseUsers>(this.url);
  }

  createUser( request: RequestCreate): Observable<ResponseCreate> {
    return this.http.post<ResponseCreate>(this.url, request);
  }

  getUser(id: string) : Observable<ResponseUser> {
    const url = `${this.url}/${id}`;
     return this.http.get<ResponseUser>(url);
  }

  updateUser(id: string, request: RequestUpdate ):  Observable<ResponseUpdate>{
    const url = `${this.url}/${id}`;
    return this.http.post<ResponseUpdate>(url, request);
  }
}
