import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CourseItem } from '../models/course-item-model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  
  public courseItems: CourseItem[] = [];

  constructor(private httpClient: HttpClient) { 
    this.courseItems = [
      {
        id: 'abcd1',
        name: 'Course 1',
        date: '2019-11-20',
        length: 150,
        description: 'Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!',
        authors: [],
        isTopRated: true
      },
      {
        id: 'abcd2',
        name: 'course 2',
        date: '2019-11-10',
        length: 50,
        description: 'Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!',
        authors: [],
        isTopRated: true
      },
      {
        id: 'abcd3',
        name: 'Course 3',
        date: '2025-12-03',
        length: 80,
        description: 'Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!',
        authors: [],
        isTopRated: false
      }, {
        id: 'abcd4',
        name: 'course 4',
        date: '2019-08-20',
        length: 98,
        description: 'Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!',
        authors: [],
        isTopRated: true
      }, {
        id: 'abcd5',
        name: 'Course 5',
        date: '2019-06-15',
        length: 150,
        description: 'Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!',
        authors: [],
        isTopRated: false
      }, {
        id: 'abcd6',
        name: 'Course 6',
        date: '2019-12-03',
        length: 150,
        description: 'Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!',
        authors: [],
        isTopRated: true
      }
    ];
  }

  getList(): any {
    /*this.httpClient.get('http://localhost:3004/courses/')
    .subscribe( {next: (items: any[]) => {
      this.courseItems = items;
      console.log(items);
    }});*/
    return this.courseItems;
  }

  createCourse(courseItem: CourseItem): void {
    this.courseItems.push(courseItem);
  }

  getCourseById(id: string): CourseItem {
    const courseItem = this.courseItems.filter((item: CourseItem) => item.id === id)[0];
    if(!courseItem) {
      return null;
    }
    return courseItem;
  }

  updateCourse(courseItem: CourseItem): void {
    this.removeCourse(courseItem.id);
    this.courseItems.push(courseItem);
  }

  removeCourse(id: string): void{
    this.courseItems = this.courseItems.filter((item: CourseItem) => item.id !== id);
  }

}
