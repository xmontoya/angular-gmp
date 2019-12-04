import { TestBed } from '@angular/core/testing';

import { CourseService } from './course.service';
import { CourseItem } from '../models/course-item-model'

describe('CourseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CourseService = TestBed.get(CourseService);
    expect(service).toBeTruthy();
  });

  it('should execute update method', () => {
    const service: CourseService = TestBed.get(CourseService);
    expect(service.updateCourse()).toEqual();
  });

  it('should execute create method', () => {
    const courseItem: CourseItem = {
      id: 'adecr2',
      title: 'Course X',
      creationDate: '2019-11-20',
      duration: 150,
      description: 'Does your lorem ipsum text long for something a little meatier?',
      authors: 'xmontoya',
      topRated: false
    };
    const service: CourseService = TestBed.get(CourseService);
    expect(service.createCourse(courseItem)).toEqual();
  });

  it('should execute create method', () => {
    const service: CourseService = TestBed.get(CourseService);
    expect(service.getCourseById('adecr2')).toEqual(undefined);
  });
});
