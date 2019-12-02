import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAddComponent } from './course-add.component';
import { CourseAddDateComponent } from '../course-add-date/course-add-date.component';
import { CourseAddDurationComponent } from '../course-add-duration/course-add-duration.component';
import { CourseAddAuthorComponent } from '../course-add-author/course-add-author.component';
import { ApplicationPipesModule } from '../../pipes/application-pipes.module';

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
        ApplicationPipesModule
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
});
