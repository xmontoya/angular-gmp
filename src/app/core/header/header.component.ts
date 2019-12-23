import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'gmp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'Angular GMP';
  userInfo = { login: '' };
  isAuthenticated: boolean = false;
  
  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.isAuthenticated = this.authService.isAuthenticated();
    if( this.isAuthenticated ){
      this.authService.getUserInfo()
        .subscribe(response => {
          this.userInfo.login = response.login;
      });
    }
  }

  public logout(): void{
    this.isAuthenticated = !this.authService.logout();
    this.router.navigate(['/login']);
  }
}
