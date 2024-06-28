import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/User';
import { Observable } from 'rxjs';
import { ResponseAcceso } from '../interfaces/ResponseAcceso';
import { Login } from '../interfaces/Login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  private apiUrl = '/api/';

  SigUp(object:User): Observable<ResponseAcceso>{
   return this.http.post<ResponseAcceso>(`${this.apiUrl}Acceso/register`, object)
  }
  login(object:Login): Observable<ResponseAcceso>{
    return this.http.post<ResponseAcceso>(`${this.apiUrl}Acceso/login`, object)
   }
}
