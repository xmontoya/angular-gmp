import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { TestBed } from '@angular/core/testing';

import { CourseService } from './course.service';
import { CourseItem } from '../models/course-item-model'

describe('CourseService', () => {
    let httpTestingController: HttpTestingController;
    let service: CourseService;
    
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [CourseService],
        imports: [HttpClientTestingModule]
      });
      
      httpTestingController = TestBed.get(HttpTestingController);
      service = TestBed.get(CourseService);
    });
  
    afterEach(() => {
      httpTestingController.verify();
    });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
/*
  it('should execute update method', () => {
    const service: CourseService = TestBed.get(CourseService);
    const courseItem: CourseItem = {
      id: 'abcd6',
      title: 'Course X',
      creationDate: '2019-11-20',
      duration: 150,
      description: 'Does your lorem ipsum text long for something a little meatier?',
      authors: 'xmontoya',
      topRated: false
    };

    expect(service.updateCourse(courseItem)).toEqual();
  });

  it('should execute create method', () => {
    const courseItem: CourseItem = {
      id: 33,
      name: 'Course X',
      date: '2019-11-20',
      length: 150,
      description: 'Does your lorem ipsum text long for something a little meatier?',
      authors: [],
      isTopRated: false
    };
    const service: CourseService = TestBed.get(CourseService);
    expect(service.createCourse(courseItem)).toEqual();
    expect(service.getCourseById(33)).toEqual(courseItem);
  });

  it('should execute getCourseById method for a non existing item', () => {
    const service: CourseService = TestBed.get(CourseService);
    expect(service.getCourseById('adecr2')).toEqual(null);
  });*/
});
