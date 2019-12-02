import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CourseListItemComponent } from './course-list-item.component';
import { CourseCardBorderDirective } from '../directives/course-card-border.directive';
import { CourseDurationPipe } from '../pipes/course-duration.pipe';
import { CourseModalConfirmComponent } from '../course-modal-confirm/course-modal-confirm.component'

export class MockNgbModalRef {
  result: Promise<any> = new Promise((resolve, reject) => resolve(true));
}

describe('CourseListItemComponent', () => {
  let component: CourseListItemComponent;
  let fixture: ComponentFixture<CourseListItemComponent>;
  let modalService: NgbModal;
  let mockModalRef: MockNgbModalRef = new MockNgbModalRef();

  const item = {
    id: 'abcd1',
    title: 'Course test',
    creationDate: '2019-10-20',
    duration: 150,
    description: 'Course test',
    topRated: true
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseListItemComponent, CourseCardBorderDirective, CourseDurationPipe, CourseModalConfirmComponent ],
      imports: [ NgbModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListItemComponent);
    component = fixture.componentInstance;
    component.item = item;
    fixture.detectChanges();
    modalService = TestBed.get(NgbModal);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should execute delete method', () => {
    expect(component.delete()).toEqual();
  });

  it('should execute edit method', () => {
    expect(component.edit()).toEqual();
  });
});
