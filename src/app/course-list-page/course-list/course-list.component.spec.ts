import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { CourseListComponent } from './course-list.component';
import { CourseListItemComponent } from '../course-list-item/course-list-item.component';
import { CourseService } from '../../services/course.service';
import { CourseSearchComponent } from '../course-search/course-search.component';
import { CourseCardBorderDirective } from '../directives/course-card-border.directive';
import { CourseItem } from '../../models/course-item-model';
import { PipesModule } from '../../pipes/pipes.module';

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;
  let routerSpy = {navigate: jasmine.createSpy('navigate')};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, PipesModule ],
      declarations: [ 
        CourseListComponent, 
        CourseListItemComponent, 
        CourseSearchComponent,
        CourseCardBorderDirective,
      ],
      providers: [ {provide: Router, useValue: routerSpy} ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should execute onRootDelete method', () => {
    const courseList = new CourseListComponent(new CourseService() );
    courseList.courseItems = [{
      id: 'abcd1',
      title: 'Course test',
      creationDate: '2019-10-20',
      duration: 150,
      description: 'Course test',
      authors: 'xmontoya',
      topRated: true
    }];
    expect(courseList.onRootDelete('abcd1')).toEqual();
  });

  it('should execute onRootSearch method', () => {
    const courseList = new CourseListComponent(new CourseService() );
    courseList.courseItems = [{
      id: 'abcd1',
      title: 'Course test',
      creationDate: '2019-10-20',
      duration: 150,
      description: 'Course test',
      authors: 'xmontoya',
      topRated: true
    }];
    courseList.courseItemsInit = courseList.courseItems;
    expect(courseList.onRootSearch('Course')).toEqual();
  });

  it('should execute onRootSearch method with no results', () => {
   expect(component.onRootSearch('')).toEqual(undefined);
  });

  it('should execute onRootEdit method', () => {
    expect(component.onRootEdit('abcd1')).toEqual();
  });
});
