import { Injectable } from '@angular/core';
import { CourseItem } from '../models/course-item-model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  
  public courseItems: CourseItem[] = [];

  constructor() { 
    this.courseItems = [
      {
        id: 'abcd1',
        title: 'Course 1',
        creationDate: '2019-11-20',
        duration: 150,
        description: 'Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!',
        topRated: true
      },
      {
        id: 'abcd2',
        title: 'course 2',
        creationDate: '2019-11-10',
        duration: 50,
        description: 'Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!',
        topRated: true
      },
      {
        id: 'abcd3',
        title: 'Course 3',
        creationDate: '2019-12-03',
        duration: 80,
        description: 'Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!',
        topRated: false
      }, {
        id: 'abcd4',
        title: 'course 4',
        creationDate: '2019-08-20',
        duration: 98,
        description: 'Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!',
        topRated: true
      }, {
        id: 'abcd5',
        title: 'Course 5',
        creationDate: '2019-06-15',
        duration: 150,
        description: 'Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!',
        topRated: false
      }, {
        id: 'abcd6',
        title: 'Course 6',
        creationDate: '2019-08-20',
        duration: 150,
        description: 'Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!',
        topRated: true
      }
    ];
  }

  getList(): CourseItem[] {
    return this.courseItems;
  }

  createCourse(courseItem: CourseItem): void {
    this.courseItems.push(courseItem);
  }

  getCourseById(id: string): CourseItem {
    return this.courseItems.filter((item: CourseItem) => item.id === id)[0];
  }

  updateCourse(): void {}

  removeCourse(id: string): void{
    this.courseItems = this.courseItems.filter((item: CourseItem) => item.id !== id);
  }

}
