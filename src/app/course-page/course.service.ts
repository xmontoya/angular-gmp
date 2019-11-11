import { Injectable } from '@angular/core';
import { CourseListItem } from './course-list/course-list-item-model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  getItems(): CourseListItem[] {
    return [
      {
        id: 1,
        title: 'Course 1',
        creationDate: '2019-10-20',
        duration: 150,
        description: 'Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!',
        topRated: true
      },
      {
        id: 2,
        title: 'course 2',
        creationDate: '2019-10-20',
        duration: 150,
        description: 'Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!',
        topRated: true
      },
      {
        id: 3,
        title: 'Course 3',
        creationDate: '2019-10-20',
        duration: 150,
        description: 'Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!',
        topRated: false
      }, {
        id: 4,
        title: 'course 4',
        creationDate: '2019-10-20',
        duration: 150,
        description: 'Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!',
        topRated: true
      }, {
        id: 5,
        title: 'Course 5',
        creationDate: '2019-10-20',
        duration: 150,
        description: 'Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!',
        topRated: false
      }, {
        id: 6,
        title: 'Course 6',
        creationDate: '2019-10-20',
        duration: 150,
        description: 'Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!',
        topRated: true
      }
    ];
  }
}
