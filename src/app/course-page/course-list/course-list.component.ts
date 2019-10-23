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

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.courseItems = this.courseService.getItems();
  }

}
