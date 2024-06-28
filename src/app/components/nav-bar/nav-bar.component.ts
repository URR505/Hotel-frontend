import { Component, Renderer2 } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { AuthService } from '../../services/auth.service';
import { User } from '../../interfaces/User';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  public user: User | null = null;
  showMenu: boolean = false;
  logoutInProgress: boolean = false;
  constructor(private renderer: Renderer2, private authService: AuthService) { }

  ngOnInit() {
    this.hideSidebar();
    this.authService.userProfile$.subscribe(
      user => {
        console.log(user);
        this.user = user;
      }
    );
  }

  showSidebar() {
    const sidebar = document.querySelector('.sidebar') as HTMLElement;
    sidebar.style.display = 'flex';
  }

  hideSidebar() {
    const sidebar = document.querySelector('.sidebar') as HTMLElement;
    sidebar.style.display = 'none';
  }


  logout() {
    this.authService.logout();
  }
  

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
