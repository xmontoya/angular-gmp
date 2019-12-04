import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'gmp-course-add-duration',
  templateUrl: './course-add-duration.component.html',
  styleUrls: ['./course-add-duration.component.scss']
})
export class CourseAddDurationComponent implements OnInit {
  @Input() duration: 0;

  @Output() durationChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  public setDurationChange(): void{
    this.durationChange.emit(this.duration);
  }

}
