import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { CourseListComponent } from './course-list.component';
import { CourseListItemComponent } from '../course-list-item/course-list-item.component';
import { CourseService } from '../course.service';
import { CourseSearchComponent } from '../course-search/course-search.component';
import { CourseSortPipe } from '../pipes/course-sort.pipe';
import { CourseCardBorderDirective } from '../directives/course-card-border.directive';
import { CourseDurationPipe } from '../pipes/course-duration.pipe';


describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ 
        CourseListComponent, 
        CourseListItemComponent, 
        CourseSearchComponent, 
        CourseSortPipe, 
        CourseCardBorderDirective,
        CourseDurationPipe ]
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

  it('should execute onSearch method', () => {
    const courseList = new CourseListComponent(new CourseService() );
    courseList.courseItems = [{
      id: 1,
      title: 'Course test',
      creationDate: '2019-10-20',
      duration: 150,
      description: 'Course test',
      topRated: true
    }];
    courseList.courseItemsInit = courseList.courseItems;
    expect(courseList.onRootSearch('Course')).toEqual();
  });
});
