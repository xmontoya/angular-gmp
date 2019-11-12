import { Component, OnInit } from '@angular/core';
import { CourseListItem } from './course-list-item-model';
import { CourseService } from '../course.service';

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
    this.courseItemsInit = this.courseService.getItems();
    this.courseItems = this.courseItemsInit;
  }

  public onRootDelete(id: number): void {
    this.courseItems = this.courseItems.filter((item: CourseListItem) => item.id !== id);
    this.courseItemsInit = this.courseItems;
  }

  public onRootSearch(title: string): void {
    this.courseItems = this.courseItemsInit.filter((item: CourseListItem) => !item.title.toLowerCase().search(title.toLowerCase()));
  }

}
