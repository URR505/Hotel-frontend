import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from '../../interfaces/Login';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  private loginService = inject(AuthService);
  private router = inject(Router);
  private formBuild = inject(FormBuilder);
  public formLogin: FormGroup = this.formBuild.group({
    email:['',Validators.required],
    password:['',Validators.required]
  })


  loginData: Login = { email: '', password: '' };

  constructor(private authService: AuthService) {}
  login() {
    if (this.formLogin.invalid) return;
  
    const loginData: Login = {
      email: this.formLogin.value.email,
      password: this.formLogin.value.password
    };
  
    this.authService.login(loginData).subscribe(
      response => {
        if (response.isSuccess) {
          this.authService.loadUserProfile();
          this.router.navigate(['catalog']);
        } else {
          // Manejar el error de inicio de sesión
          alert('Credenciales Incorrectas');
        }
      },
      error => {
        // Manejar el error de inicio de sesión
        console.log(error.message);
      }
    );
  }

}
