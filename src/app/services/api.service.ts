import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { HotelesResponse } from '../interfaces/HotelesResponse';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  private apiUrl = '/api';

  // GET
  getHotels(): Observable<HotelesResponse> {
    return this.http.get<HotelesResponse>(`${this.apiUrl}/hoteles`, { withCredentials: true });
  }
}
