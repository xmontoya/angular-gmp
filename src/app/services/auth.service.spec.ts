import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });

  it('should execute login method', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service.login('user', 'password')).toEqual(true);
  });

  it('should execute login method already logged user', () => {
    const service: AuthService = TestBed.get(AuthService);
    service.login('user', 'password');
    expect(service.login('user', 'password')).toEqual(true);
  });

  it('should execute logout method', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service.logout()).toEqual(true);
  });

  it('should execute isAuthenticated method', () => {
    const service: AuthService = TestBed.get(AuthService);
    service.login('user', 'password');
    expect(service.isAuthenticated()).toEqual(true);
  });

  it('should execute isAuthenticated method for false result', () => {
    const service: AuthService = TestBed.get(AuthService);
    service.logout()
    expect(service.isAuthenticated()).toEqual(false);
  });

  it('should execute getUserInfo method', () => {
    const service: AuthService = TestBed.get(AuthService);
    service.logout();
    service.login('user', 'password');
    expect(service.getUserInfo().user).toEqual('user');
  });
});
