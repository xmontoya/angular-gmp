import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListComponent } from './course-list.component';
import { CourseListItemComponent } from '../course-list-item/course-list-item.component';
import { CourseService } from '../course.service';

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseListComponent, CourseListItemComponent ]
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

  it('should execute onDelete method', () => {
    const courseList = new CourseListComponent(new CourseService() );
    courseList.courseItems = [{
      id: 1,
      title: 'Course test',
      creationDate: '2019-10-20',
      duration: 150,
      description: 'Course test',
      topRated: true
    }];
    expect(courseList.onRootDelete(1)).toEqual();
  });
});
