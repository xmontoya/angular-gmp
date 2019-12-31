import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

import { CourseListItemComponent } from './course-list-item.component';
import { CourseCardBorderDirective } from '../directives/course-card-border.directive';
import { PipesModule } from '../../pipes/pipes.module';
import { CourseModalConfirmComponent } from '../course-modal-confirm/course-modal-confirm.component'

describe('CourseListItemComponent', () => {
  let component: CourseListItemComponent;
  let fixture: ComponentFixture<CourseListItemComponent>;
  let routerSpy = {navigate: jasmine.createSpy('navigate')};

  const item = {
    id: 56,
    name: 'Course test',
    date: '2019-10-20',
    length: 150,
    description: 'Course test',
    authors: 'xmontoya',
    isTopRated: true
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseListItemComponent, CourseCardBorderDirective, CourseModalConfirmComponent ],
      imports: [ NgbModule, PipesModule ],
      providers: [ {provide: Router, useValue: routerSpy} ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListItemComponent);
    component = fixture.componentInstance;
    component.item = item;
    fixture.detectChanges();
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
