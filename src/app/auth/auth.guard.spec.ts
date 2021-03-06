import { TestBed, async, inject } from '@angular/core/testing';
import { Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AuthGuard } from './auth.guard';
import { AuthService } from '../services/auth.service';

class AuthMock implements Partial<AuthService> {
  isAuth = false;
  isAuthenticated = () => true;
  logout = () => true;
  getUserInfo = () => {};
  login = () => true;
}

describe('AuthGuard', () => {
  let routerSpy = {
    navigate: jasmine.createSpy('navigate'),
    parseUrl: jasmine.createSpy('parseUrl')
  };
  const routerMock = jasmine.createSpyObj('Router', ['navigate', 'parseUrl']);
  let httpTestingController: HttpTestingController;
  let authGuard: AuthGuard;
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard, {provide: Router, useValue: routerMock} ],
      imports: [HttpClientTestingModule]
    });

    httpTestingController = TestBed.get(HttpTestingController);
    authService = TestBed.get(AuthService);
    authGuard = new AuthGuard(authService, routerMock);
  });

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));

  it('should execute canActivate', inject([AuthGuard], (guard: AuthGuard) => {
    authService.isAuth = true;
    const result = authGuard.canActivate(new ActivatedRouteSnapshot(), <RouterStateSnapshot>{url: 'courses'});
    expect(result).toEqual(true);
  }));

  it('should execute canActivate', inject([AuthGuard], (guard: AuthGuard) => {
    authService.isAuth = false;
    authGuard.canActivate(new ActivatedRouteSnapshot(), <RouterStateSnapshot>{url: 'courses'});
    expect(routerMock.parseUrl).toHaveBeenCalledWith('/login');
  }));

});
