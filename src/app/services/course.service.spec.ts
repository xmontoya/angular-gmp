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

  it('should execute update method', () => { 
    const mockUpdate = {
      id: 56,
      name: 'Coursess',
      date: '2019-11-20',
      length: 150,
      description: 'Does your lorem ipsum text long for something a little meatier?',
      authors: 'xmontoya',
      isTopRated: false
    };

    service.updateCourse(mockUpdate)
        .subscribe(courseData => {
          expect(courseData.name).toEqual('Coursess');
        });
      const req = httpTestingController.expectOne('http://localhost:3004/courses/'+mockUpdate.id);
  
      expect(req.request.method).toEqual('PATCH');
      req.flush(mockUpdate);
  });

  it('should execute create method', () => {
    const courseItem: CourseItem = {
      id: 21,
      name: 'Course X',
      date: '2019-11-20',
      length: 150,
      description: 'Does your lorem ipsum text long for something a little meatier?',
      authors: [],
      isTopRated: false
    };

    service.createCourse(courseItem)
        .subscribe(courseData => {
          expect(courseData.id).toEqual(21);
          expect(courseData.name).toEqual('Course X');
        });

    const req = httpTestingController.expectOne('http://localhost:3004/courses/');

    expect(req.request.method).toEqual('POST');
    req.flush(courseItem);
  });

  it('should execute getCourseById method', () => {
    const courseItem: CourseItem = {
      id: 21,
      name: 'Course X',
      date: '2019-11-20',
      length: 150,
      description: 'Does your lorem ipsum text long for something a little meatier?',
      authors: [],
      isTopRated: false
    };

    service.getCourseById('21')
        .subscribe(courseData => {
          expect(courseData.id).toEqual(21);
          expect(courseData.name).toEqual('Course X');
        });

    const req = httpTestingController.expectOne('http://localhost:3004/courses/21');

    expect(req.request.method).toEqual('GET');
    req.flush(courseItem);
  });

  it('should execute getList', () => {
    const courseItems: CourseItem[] = [
      {
        id: 21,
        name: 'Course X',
        date: '2019-11-20',
        length: 150,
        description: 'Does your lorem ipsum text long for something a little meatier?',
        authors: [],
        isTopRated: false
      },
      {
        id: 22,
        name: 'Course Y',
        date: '2019-11-20',
        length: 150,
        description: 'Does your lorem ipsum text long for something a little meatier?',
        authors: [],
        isTopRated: false
      },
  ];

    service.getList({})
        .subscribe(courseData => {
          expect(courseData.length).toEqual(2);
        });

    const req = httpTestingController.expectOne('http://localhost:3004/courses/');

    expect(req.request.method).toEqual('GET');
    req.flush(courseItems);
  });

  it('should execute getCourseById method', () => {
    service.removeCourse(31)
        .subscribe(courseData => {
          expect(courseData).toEqual({});
        });

    const req = httpTestingController.expectOne('http://localhost:3004/courses/31');

    expect(req.request.method).toEqual('DELETE');
    req.flush({});
  });
});
