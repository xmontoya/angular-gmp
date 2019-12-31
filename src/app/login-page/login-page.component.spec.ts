import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CoreModule  } from '../core/core.module';

import { LoginPageComponent } from './login-page.component';
import { AuthService } from '../services/auth.service';
import { of } from 'rxjs';

let authServiceStub: Partial<AuthService>;

authServiceStub = {
  isAuth: false,
  login: (user: string, pass: string) => of({token: '58ebfdf7f1f558c5c86e17f6'}),
  logout: () =>true,
  isAuthenticated: () => true,
  getUserInfo: () => of({login: 'user'})
};

class RouterMock {
  navigateByUrl(url: string) {
    return url;
  }
  serializeUrl(url: string) {
     return url;
  }
  navigate(urls: []) {
    return urls;
  }
}

describe('LoginPageComponent', () => {
  let httpTestingController: HttpTestingController;
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;
  let routerSpy = {navigate: jasmine.createSpy('navigate')};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, CoreModule, HttpClientTestingModule ],
      declarations: [ LoginPageComponent ],
      providers: [ 
        {provide: Router, useValue: routerSpy},
        {provide: AuthService, useValue: authServiceStub} ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    httpTestingController = TestBed.get(HttpTestingController);
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should execute login method', () => {
    expect(component.login()).toEqual();
  });
});
