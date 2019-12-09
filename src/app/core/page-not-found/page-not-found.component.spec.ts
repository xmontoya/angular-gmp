import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { CoreModule  } from '../core.module';

import { PageNotFoundComponent } from './page-not-found.component';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { HeaderComponent } from '../header/header.component';

describe('PageNotFoundComponent', () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;
  let routerSpy = {navigate: jasmine.createSpy('navigate')};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNotFoundComponent, BreadcrumbComponent, HeaderComponent],
      providers: [ {provide: Router, useValue: routerSpy} ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
