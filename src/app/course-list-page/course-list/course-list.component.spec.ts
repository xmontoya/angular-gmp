import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


import { CoreModule } from '../../core/core.module';

import { CourseListComponent } from './course-list.component';
import { CourseListItemComponent } from '../course-list-item/course-list-item.component';
import { CourseSearchComponent } from '../course-search/course-search.component';
import { CourseCardBorderDirective } from '../directives/course-card-border.directive';
import { PipesModule } from '../../pipes/pipes.module';

describe('CourseListComponent', () => {
  let httpTestingController: HttpTestingController;
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;
  let routerSpy = {navigate: jasmine.createSpy('navigate')};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, PipesModule, CoreModule, HttpClientTestingModule ],
      declarations: [ 
        CourseListComponent, 
        CourseListItemComponent, 
        CourseSearchComponent,
        CourseCardBorderDirective
      ],
      providers: [ {provide: Router, useValue: routerSpy} ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    httpTestingController = TestBed.get(HttpTestingController);
    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should execute onRootDelete method', () => {
    //const courseList = new CourseListComponent(new CourseService( ) );
    component.courseItems = [{
      id: 45,
      name: 'Course test',
      date: '2019-10-20',
      length: 150,
      description: 'Course test',
      authors: [],
      isTopRated: true
    }];
    expect(component.onRootDelete(45)).toEqual();
  });

  it('should execute onRootSearch method', () => {
    //const courseList = new CourseListComponent(new CourseService() );
    component.courseItems = [{
      id: 45,
      name: 'Course test',
      date: '2019-10-20',
      length: 150,
      description: 'Course test',
      authors: [],
      isTopRated: true
    }];
    component.courseItemsInit = component.courseItems;
    expect(component.onRootSearch('Course')).toEqual();
  });

  it('should execute onRootSearch method with no results', () => {
   expect(component.onRootSearch('')).toEqual(undefined);
  });

});
