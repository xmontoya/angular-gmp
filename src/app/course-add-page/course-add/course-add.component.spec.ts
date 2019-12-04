import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { CourseAddComponent } from './course-add.component';
import { CourseAddDateComponent } from '../course-add-date/course-add-date.component';
import { CourseAddDurationComponent } from '../course-add-duration/course-add-duration.component';
import { CourseAddAuthorComponent } from '../course-add-author/course-add-author.component';
import { PipesModule } from '../../pipes/pipes.module';

class RouterMock {
  navigateByUrl(url: string) {
    return url;
  }
  serializeUrl(url: string) {
     return url;
  }
  navigate(urls: ['courses']) {
    return urls;
  }
}

describe('CourseAddComponent', () => {
  let component: CourseAddComponent;
  let fixture: ComponentFixture<CourseAddComponent>;

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
        PipesModule
       ],
       providers: [ {provide: Router, useClass: RouterMock} ]
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
    expect(component.create()).toEqual();
  });
});
