import { Component, OnInit } from '@angular/core';
import { CourseListItem } from './course-list-item-model';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'gmp-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  public courseItems: CourseListItem[] = [];
  public courseItemsInit: CourseListItem[] = [];

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
      this.courseItems = this.courseItemsInit.filter((item: CourseListItem) => !item.title.toLowerCase().search(title.toLowerCase()));
    } 
  }

  public onRootEdit(id: string): void {
    console.log(this.courseService.getCourseById(id));
  }

  public onRootCreate(courseItem: CourseListItem): void {
    this.courseService.createCourse(courseItem);
  }

}
