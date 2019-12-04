import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'gmp-course-add-author',
  templateUrl: './course-add-author.component.html',
  styleUrls: ['./course-add-author.component.scss']
})
export class CourseAddAuthorComponent implements OnInit {
  @Input() authors: string = '';

  @Output() authorsChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  public setAuthorsChange(): void{
    this.authorsChange.emit(this.authors);
  }

}
