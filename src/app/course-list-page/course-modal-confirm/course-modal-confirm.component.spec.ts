import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { CourseModalConfirmComponent } from './course-modal-confirm.component';

describe('CourseModalConfirmComponent', () => {
  let component: CourseModalConfirmComponent;
  let fixture: ComponentFixture<CourseModalConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseModalConfirmComponent ],
      providers: [ NgbActiveModal ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseModalConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
