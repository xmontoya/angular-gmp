import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { v1 as uuid } from 'uuid';
import { CourseListItem } from '../course-list/course-list-item-model';

@Component({
  selector: 'gmp-course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseSearchComponent implements OnInit {
  searchCourse: '';

  @Output('onSearchCourse') onSearch: EventEmitter<string> = new EventEmitter<string>();

  @Output('onCreateCourse') onCreate: EventEmitter<CourseListItem> = new EventEmitter<CourseListItem>();

  constructor() { }

  ngOnInit() {
  }

  public search(): void{
    this.onSearch.emit(this.searchCourse);
  }

  public create(): void{
    const itemId = uuid();
    const courseItem: CourseListItem = {
      id: itemId,
      title: 'Course X',
      creationDate: '2019-11-20',
      duration: 150,
      description: 'Does your lorem ipsum text long for something a little meatier?',
      topRated: false
    };

    this.onCreate.emit(courseItem);
  }
}
