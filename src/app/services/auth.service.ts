import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth: boolean = false;

  constructor(private httpClient: HttpClient) {
    this.isAuth = localStorage.getItem('angularGMPToken') ? true : false;
  }

  login(user: string, pass: string): any {
    return this.httpClient.post('http://localhost:3004/auth/login', { login: user, password: pass});
  }

  logout(): boolean {
    localStorage.removeItem('angularGMPToken');
    localStorage.removeItem('angularGMPUserInfo');
    this.isAuth = false;
    return true;
  }

  isAuthenticated(): boolean {
    return this.isAuth = localStorage.getItem('angularGMPToken') ? true : false;
  }

  getUserInfo(): any {
    return this.httpClient.post('http://localhost:3004/auth/userinfo', { token: localStorage.getItem('angularGMPToken') });
  }
}
