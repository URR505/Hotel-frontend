import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from '../../interfaces/Login';
import { Router } from '@angular/router';

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


  iniciarSesion(){
    if(this.formLogin.invalid) return;

    const objeto:Login = {
      email: this.formLogin.value.email,
      password: this.formLogin.value.password
    }

    this.loginService.login(objeto).subscribe({
      next:(data) => {
        if(data.isSuccess){
          localStorage.setItem("token", data.token)
          this.router.navigate(['catalog'])
        }else{
          alert("Credenciales Incorrectas")
        }
      },
      error:(error) => {
        console.log(error.nessage);
      }
    })
  }

  registrarse(){
    this.router.navigate(['registro'])
  }

}
