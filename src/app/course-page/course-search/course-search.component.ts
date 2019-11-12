import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'gmp-course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.scss']
})
export class CourseSearchComponent implements OnInit {
  searchCourse: '';

  @Output('onSearchCourse') onSearch: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  public search(): void{
    this.onSearch.emit(this.searchCourse);
  }
}
