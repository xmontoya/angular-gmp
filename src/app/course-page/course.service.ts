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
        creationDate: '21-10-2019',
        duration: 150,
        description: 'Course 1'
      },
      {
        id: 1,
        title: 'Course 2',
        creationDate: '21-10-2019',
        duration: 150,
        description: 'Course 2'
      },
      {
        id: 1,
        title: 'Course 3',
        creationDate: '21-10-2019',
        duration: 150,
        description: 'Course 3'
      }, {
        id: 1,
        title: 'Course 4',
        creationDate: '21-10-2019',
        duration: 150,
        description: 'Course 4'
      }
    ];
  }
}
