import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gmp-course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.scss']
})
export class CourseSearchComponent implements OnInit {
  searchCourse: '';

  constructor() { }

  ngOnInit() {
  }

  public search(): void{
    console.log(this.searchCourse);
  }
}
