import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAddDurationComponent } from './course-add-duration.component';
import { PipesModule } from '../../pipes/pipes.module';

describe('CourseAddDurationComponent', () => {
  let component: CourseAddDurationComponent;
  let fixture: ComponentFixture<CourseAddDurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        CourseAddDurationComponent
      ],
      imports: [
        PipesModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseAddDurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
