import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { CourseSearchComponent } from './course-search.component';

describe('CourseSearchComponent', () => {
  let component: CourseSearchComponent;
  let fixture: ComponentFixture<CourseSearchComponent>;
  let routerSpy = {navigate: jasmine.createSpy('navigate')};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:      [ FormsModule ],
      declarations: [ CourseSearchComponent ],
      providers: [ {provide: Router, useValue: routerSpy} ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should execute search method', () => {
    expect(component.search()).toEqual();
  });

  it('should execute addCourse method', () => {
    component.addCourse();
    expect (routerSpy.navigate).toHaveBeenCalledWith(['courses/new']);
  });
});
