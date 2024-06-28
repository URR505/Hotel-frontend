import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  private apiUrl = '/api';


  // GET
  getData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/hoteles`);
  }

}
