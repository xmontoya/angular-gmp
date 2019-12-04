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
  navigate(urls: []) {
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
});
