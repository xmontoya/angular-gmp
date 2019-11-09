import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListItemComponent } from './course-list-item.component';

describe('CourseListItemComponent', () => {
  let component: CourseListItemComponent;
  let fixture: ComponentFixture<CourseListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListItemComponent);
    component = fixture.componentInstance;
    const item = {
      id: 1,
      title: 'Course test',
      creationDate: '21-10-2019',
      duration: 150,
      description: 'Course test'
    };
    component.item = item;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
