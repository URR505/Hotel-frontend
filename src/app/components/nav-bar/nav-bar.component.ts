import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.hideSidebar(); // Asegúrate de que la barra lateral esté oculta al cargar la página
  }

  showSidebar() {
    const sidebar = document.querySelector('.sidebar') as HTMLElement;
    sidebar.style.display = 'flex';
  }

  hideSidebar() {
    const sidebar = document.querySelector('.sidebar') as HTMLElement;
    sidebar.style.display = 'none';
  }
}
