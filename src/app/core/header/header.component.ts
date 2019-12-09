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
  userInfo = { user: '' };
  isAuthenticated: boolean = false;
  
  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.isAuthenticated = this.authService.isAuthenticated();
    if( this.isAuthenticated ){
      this.userInfo = this.authService.getUserInfo();
    }
  }

  public logout(): void{
    this.isAuthenticated = !this.authService.logout();
    this.router.navigate(['/login']);
  }
}
