import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'fa fa-home', class: '' },
    { path: '/user-profile', title: 'Clients',  icon:'fas fa-users', class: '' },
    { path: '/table-list', title: 'Programs',  icon:'far fa-calendar-alt', class: '' },
    { path: '/typography', title: 'Users',  icon:'fas fa-user-cog', class: '' }
];

export const SIDERBARBOTTOM: RouteInfo[] = [
    { path: '', title: 'Collapse',  icon: 'fa-3x fas fa-caret-left', class: '' },
    { path: '', title: 'Logout',  icon:'fas fa-sign-out-alt rotate-180', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  sidebarBottomItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.sidebarBottomItems = SIDERBARBOTTOM.filter(sidebarBottomItem => sidebarBottomItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
