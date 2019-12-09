import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { CoreModule  } from '../../core/core.module';
import { CourseAddComponent } from './course-add.component';
import { CourseAddDateComponent } from '../course-add-date/course-add-date.component';
import { CourseAddDurationComponent } from '../course-add-duration/course-add-duration.component';
import { CourseAddAuthorComponent } from '../course-add-author/course-add-author.component';
import { PipesModule } from '../../pipes/pipes.module';

describe('CourseAddComponent', () => {
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
        CoreModule
       ],
       providers: [ 
         {provide: Router, useValue: routerSpy}, 
         {provide: ActivatedRoute, useValue: activateSpy}
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
    component.onDurationChange(123)
    expect(component.item.duration).toEqual(123);
  });

  it('should execute onDateChange method', () => {
    component.onDateChange('2020-01-03')
    expect(component.item.creationDate).toEqual('2020-01-03');
  });

  it('should execute onAuthorsChange method', () => {
    component.onAuthorsChange('developer')
    expect(component.item.authors).toEqual('developer');
  });

  it('should execute create method', () => {
    component.item = {
      id: '',
      title: 'Course X',
      creationDate: '2019-11-20',
      duration: 150,
      description: 'Does your lorem ipsum text long for something a little meatier?',
      authors: 'developer',
      topRated: false
    };
    component.create();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['courses']);
  });

  it('should execute create method with updated item', () => {
    component.item = {
      id: 'abcd5',
      title: 'Course X2',
      creationDate: '2019-11-20',
      duration: 150,
      description: 'Does your lorem ipsum text long for something a little meatier?',
      authors: 'developer',
      topRated: false
    };
    component.create();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['courses']);
  });

  it('should execute cancel method', () => {
    component.cancel();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['courses']);
  });
});
