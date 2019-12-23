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
    this.courseService.getList()
      .subscribe(courses => {
        this.courseItemsInit = courses;
        this.courseItems = this.courseItemsInit;
        console.log(courses);
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
      //this.courseItems = [];//this.courseItemsInit.filter((item: CourseItem) => !item.name.toLowerCase().search(title.toLowerCase()));
    } 
  }

}
