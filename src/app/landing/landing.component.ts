import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  onButtonClick() {
    // Acción que se realiza al hacer clic en el botón
    alert('¡Descubre más!');
  }
}
