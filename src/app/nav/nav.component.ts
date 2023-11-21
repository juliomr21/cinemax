import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isNavbarCollapsed = false;
  constructor() {
   
}



  ngOnInit(): void {
  }
 
  toggleNavbar() {
    // Cerrar el menú
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
}
}
