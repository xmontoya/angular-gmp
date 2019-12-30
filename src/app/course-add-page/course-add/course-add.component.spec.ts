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
    expect(component.item.length).toEqual(123);
  });

  it('should execute onDateChange method', () => {
    component.onDateChange('2020-01-03')
    expect(component.item.date).toEqual('2020-01-03');
  });

  it('should execute onAuthorsChange method', () => {
    component.onAuthorsChange([])
    expect(component.item.authors).toEqual([]);
  });

  it('should execute create method', () => {
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
