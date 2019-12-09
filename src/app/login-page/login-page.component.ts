import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'gmp-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginUser: string = '';
  loginPassword: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if(this.authService.isAuth) this.router.navigate(['courses']);  
  }

  public login(): void{
    this.authService.login(this.loginUser, this.loginPassword);
    this.router.navigate(['courses']);  
  }
}
