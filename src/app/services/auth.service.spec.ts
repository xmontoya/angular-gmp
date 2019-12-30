import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let httpTestingController: HttpTestingController;
    let service: AuthService;
    
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [AuthService],
        imports: [HttpClientTestingModule]
      });
      
      httpTestingController = TestBed.get(HttpTestingController);
      service = TestBed.get(AuthService);
    });
  
    afterEach(() => {
      httpTestingController.verify();
    });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should execute login method', () => {
      const mockLogin = {
        token: '58ebfdf7f1f558c5c86e17f6',
      }; 
      service.login('user', 'password')
        .subscribe(loginData => {
          expect(loginData.token).toEqual('58ebfdf7f1f558c5c86e17f6');
        });
      const req = httpTestingController.expectOne('http://localhost:3004/auth/login');
  
      expect(req.request.method).toEqual('POST');
      req.flush(mockLogin);
  });

  it('should execute logout method', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service.logout()).toEqual(true);
  });

  it('should execute isAuthenticated method', () => {
    const mockLogin = {
      token: '58ebfdf7f1f558c5c86e17f6',
    }; 

    service.login('user', 'password')
      .subscribe(loginData => {
        expect(loginData.token).toEqual('58ebfdf7f1f558c5c86e17f6');
      });

    const req = httpTestingController.expectOne('http://localhost:3004/auth/login');

    expect(req.request.method).toEqual('POST');
    req.flush(mockLogin);
    localStorage.setItem('angularGMPToken', mockLogin.token);
    expect(service.isAuthenticated()).toEqual(true);
  });

  it('should execute isAuthenticated method for false result', () => {
    const service: AuthService = TestBed.get(AuthService);
    service.logout()
    expect(service.isAuthenticated()).toEqual(false);
  });

  it('should execute getUserInfo method', () => {
    localStorage.setItem('angularGMPToken', '58ebfdf7f1f558c5c86e17f6');

    const mockInfo = {
      login: 'user'
    }
    service.getUserInfo()
      .subscribe(userData => {
        expect(userData.login).toEqual('user');
      });

      const req = httpTestingController.expectOne('http://localhost:3004/auth/userinfo');

      expect(req.request.method).toEqual('POST');
      req.flush(mockInfo);
  });
});
