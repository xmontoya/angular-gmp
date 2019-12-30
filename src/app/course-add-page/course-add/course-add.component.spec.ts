import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { CoreModule  } from '../../core/core.module';
import { CourseAddComponent } from './course-add.component';
import { CourseAddDateComponent } from '../course-add-date/course-add-date.component';
import { CourseAddDurationComponent } from '../course-add-duration/course-add-duration.component';
import { CourseAddAuthorComponent } from '../course-add-author/course-add-author.component';
import { PipesModule } from '../../pipes/pipes.module';
import { CourseService } from 'src/app/services/course.service';
import { CourseItem } from '../../models/course-item-model';

let courseServiceStub: Partial<CourseService>;

const courseItemMock: CourseItem = {
  id: 23,
  name: 'Course X2',
  date: '2019-11-20',
  length: 150,
  description: 'Does your lorem ipsum text long for something a little meatier?',
  authors: [],
  isTopRated: false
};

courseServiceStub = {
  getList: () => { return of([courseItemMock]) },
  createCourse: (courseItem) => of(courseItemMock),
  getCourseById: (id) => of(courseItemMock),
  updateCourse: (courseItem) => of(courseItemMock),
  removeCourse: (id) => of({})
};

describe('CourseAddComponent', () => {
  let httpTestingController: HttpTestingController;
  let component: CourseAddComponent;
  let fixture: ComponentFixture<CourseAddComponent>;
  let routerSpy = {navigate: jasmine.createSpy('navigate')};
  let activateSpy = {
    snapshot: {
      paramMap: {
        get: jasmine.createSpy('get').and.returnValue('abcd5')
      }
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        CourseAddComponent,
        CourseAddDateComponent,
        CourseAddDurationComponent,
        CourseAddAuthorComponent
       ],
       imports: [
        FormsModule, 
        PipesModule,
        CoreModule,
        HttpClientTestingModule
       ],
       providers: [ 
         {provide: Router, useValue: routerSpy}, 
         {provide: ActivatedRoute, useValue: activateSpy},
         {provide: CourseService, useValue: courseServiceStub}
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should execute onDurationChange method', () => {
    component.onDurationChange(123);
    expect(component.item.length).toEqual(123);
  });

  it('should execute onDateChange method', () => {
    component.onDateChange('2020-01-03');
    expect(component.item.date).toEqual('2020-01-03');
  });

  it('should execute onAuthorsChange method', () => {
    component.onAuthorsChange([]);
    expect(component.item.authors).toEqual([]);
  });

  it('should execute create method', () => {
    localStorage.setItem('angularGMPToken', '58ebfdf7f1f558c5c86e17f6');
    component.item = {
      id: 0,
      name: 'Course X2',
      date: '2019-11-20',
      length: 150,
      description: 'Does your lorem ipsum text long for something a little meatier?',
      authors: [],
      isTopRated: false
    };
    component.create();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['courses']);
  });

  it('should execute create method with updated item', () => {
    localStorage.setItem('angularGMPToken', '58ebfdf7f1f558c5c86e17f6');
    component.item = {
      id: 56,
      name: 'Course X2',
      date: '2019-11-20',
      length: 150,
      description: 'Does your lorem ipsum text long for something a little meatier?',
      authors: [],
      isTopRated: false
    };
    component.create();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['courses']);
  });

  it('should execute cancel method', () => {
    component.cancel();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['courses']);
  });
});
