import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

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
        FormsModule, 
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

  it('should execute setDurationChange method', () => {
    expect(component.setDurationChange()).toEqual();
  });
});
