import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../interfaces/User';
import { ResponseAcceso } from '../interfaces/ResponseAcceso';
import { Login } from '../interfaces/Login';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = '/api/';
  private userProfileSubject = new BehaviorSubject<User | null>(null);
  public userProfile$ = this.userProfileSubject.asObservable();
  constructor(private http: HttpClient, private router: Router) {
    this.loadUserProfile();
  }

  sigUp(user: User): Observable<ResponseAcceso> {
    return this.http.post<ResponseAcceso>(`${this.apiUrl}Acceso/register`, user);
  }

  login(loginData: Login): Observable<ResponseAcceso> {
    return this.http.post<ResponseAcceso>(`${this.apiUrl}Acceso/login`, loginData, { withCredentials: true });
  }

  loadUserProfile() {
    this.http.get<User>(`${this.apiUrl}profile`, { withCredentials: true }).subscribe(
      data => this.userProfileSubject.next(data),
      err => this.userProfileSubject.next(null)
    );
  }

  getUserProfile(): User | null {
    return this.userProfileSubject.getValue();
  }

  logout() {
   
    return this.http.post('/api/logout', {})
      .subscribe(
        () => {
          this.userProfileSubject.next(null); // Limpiar el perfil de usuario localmente
          this.router.navigate(['/profile']); // Redirigir a la página de inicio de sesión
        },
        error => {
          console.error('Error al cerrar sesión:', error);
        }
      );
  }
}
