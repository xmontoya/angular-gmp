import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'gmp-course-add-date',
  templateUrl: './course-add-date.component.html',
  styleUrls: ['./course-add-date.component.scss']
})
export class CourseAddDateComponent implements OnInit {
  @Input() date: '';

  @Output() creationDateChange = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit() {
  }

  public setCreationDateChange(): void{
    this.creationDateChange.emit(this.date);
  }
}
