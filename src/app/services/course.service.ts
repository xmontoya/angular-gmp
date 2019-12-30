import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CourseItem } from '../models/course-item-model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  
  public courseItems: CourseItem[] = [];
  public coursesUrl: string = 'http://localhost:3004/courses/';

  constructor(private httpClient: HttpClient) { }

  getList(text: string): Observable<CourseItem[]> {
    return this.httpClient.get<CourseItem[]>(this.coursesUrl, {params: {textFragment: text}})
  }

  createCourse(courseItem: CourseItem): Observable<CourseItem> {
    return this.httpClient.post<CourseItem>(this.coursesUrl, courseItem);
  }

  getCourseById(id: string): Observable<CourseItem> {
    return this.httpClient.get<CourseItem>(this.coursesUrl+id);
  }

  updateCourse(courseItem: CourseItem):  Observable<CourseItem> {
    return this.httpClient.patch<CourseItem>(this.coursesUrl+courseItem.id, courseItem);
  }

  removeCourse(id: number): any {
    return this.httpClient.delete<CourseItem>(this.coursesUrl+id);
  }

}
