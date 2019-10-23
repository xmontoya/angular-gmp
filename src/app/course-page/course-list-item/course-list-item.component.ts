import { Component, OnInit, Input } from '@angular/core';
import { CourseListItem } from '../course-list/course-list-item-model';

@Component({
  selector: 'gmp-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.scss']
})
export class CourseListItemComponent implements OnInit {
  @Input() item: CourseListItem;
  
  constructor() { }

  ngOnInit() {
  }

}
