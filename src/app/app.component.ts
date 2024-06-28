import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loading = false;
  logoutLoading = false;

  constructor(private router: Router, private authService: AuthService) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationStart || event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError)
    ).subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loading = true;
        if ((event as NavigationStart).url === '/catalog') {
          setTimeout(() => {
            this.loading = false;
          }, 2000); // Ocultar la pantalla de carga después de 5 segundos
        } else {
          this.loading = false;
        }
      }
    });
  }

  logout() {
    this.authService.logout();
    this.logoutLoading = true; // Mostrar loader al iniciar logout
    setTimeout(() => {
      this.logoutLoading = false; // Ocultar loader después de un tiempo arbitrario o evento de redirección
    }, 1000); // Por ejemplo, ocultar después de 1 segundo (ajusta según necesites)
  }
}
