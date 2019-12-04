import { Component, OnInit } from '@angular/core';
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
    this.courseItemsInit = this.courseService.getList();
    this.courseItems = this.courseItemsInit;
  }

  public onRootDelete(id: string): void {
    this.courseService.removeCourse(id);
    this.courseItemsInit = this.courseService.getList();
    this.courseItems = this.courseItemsInit;
  }

  public onRootSearch(title: string): void {
    if(title){
      this.courseItems = this.courseItemsInit.filter((item: CourseItem) => !item.title.toLowerCase().search(title.toLowerCase()));
    } 
  }

  public onRootEdit(id: string): void {
    console.log(this.courseService.getCourseById(id));
  }
}
