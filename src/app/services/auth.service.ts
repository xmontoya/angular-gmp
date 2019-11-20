import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(user: string, pass: string): void {
    
  }

  logout(): void {

  }

  isAuthenticated(): boolean {
    return true;
  }

  getUserInfo(): any {
    return {};
  }
}
