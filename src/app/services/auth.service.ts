import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth: boolean = false;

  constructor() {
    this.isAuth = localStorage.getItem('angularGMPToken') ? true : false;
   }

  login(user: string, pass: string): boolean {
    if( !localStorage.getItem('angularGMPToken') ) {
      localStorage.setItem('angularGMPUserInfo', JSON.stringify({ user: user }));  
      localStorage.setItem('angularGMPToken', 'AGMPT-123456');
    }

    return this.isAuth = localStorage.getItem('angularGMPToken') ? true : false; 
  }

  logout(): boolean {
    localStorage.removeItem('angularGMPToken');
    localStorage.removeItem('angularGMPUserInfo');
    this.isAuth = false;
    return true;
  }

  isAuthenticated(): boolean {
    return this.isAuth;
  }

  getUserInfo(): any {
    return JSON.parse(localStorage.getItem('angularGMPUserInfo'));
  }
}
