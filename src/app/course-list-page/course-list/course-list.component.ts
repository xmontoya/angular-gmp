import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CourseItem } from '../../models/course-item-model';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'gmp-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  public courseItems: CourseItem[] = [];
  public courseItemsInit: CourseItem[] = [];

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.getCourses();
  }

  private getCourses(): void {
    const count = this.courseItems.length + 5;
    this.courseService.getList({start:0, count: count})
      .subscribe(courses => {
        this.courseItemsInit = courses;
        this.courseItems = this.courseItemsInit;
      });
  }

  public onRootDelete(id: number): void {
    this.courseService.removeCourse(id)
      .subscribe( () => {
        this.getCourses();
      });
  }

  public onRootSearch(title: string): void {
    if(title){
      this.courseService.getList({textFragment: title})
      .subscribe(courses => {
        this.courseItemsInit = courses;
        this.courseItems = this.courseItemsInit;
      });
    } 
  }
}
