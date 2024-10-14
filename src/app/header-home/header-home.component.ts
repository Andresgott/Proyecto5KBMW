import { Component } from '@angular/core';

@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.css']
})
export class HeaderHomeComponent {
  isMenuOpen: boolean = false;


  // Método para abrir o cerrar el menú manualmente
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Método para cerrar el menú automáticamente
  closeMenu() {
    this.isMenuOpen = false;
  }
}
