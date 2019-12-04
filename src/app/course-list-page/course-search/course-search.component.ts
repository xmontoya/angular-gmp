import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'gmp-course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseSearchComponent implements OnInit {
  searchCourse: '';

  @Output('onSearchCourse') onSearch: EventEmitter<string> = new EventEmitter<string>();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public search(): void{
    this.onSearch.emit(this.searchCourse);
  }

  public addCourse(): void{
    this.router.navigate(['course-add']);
  }
}
