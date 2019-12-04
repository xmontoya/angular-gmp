import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { v1 as uuid } from 'uuid';

import { CourseItem } from '../../models/course-item-model';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'gmp-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.scss']
})
export class CourseAddComponent implements OnInit {
  @Input() item: CourseItem = {
    id: '',
    title: '',
    creationDate: '',
    duration: 0,
    description: '',
    topRated: false
  };
  
  constructor(private courseService: CourseService, private router: Router) { }

  ngOnInit() {
  }

  public create(): void{
    const itemId = uuid();
    this.item.id = itemId;
    this.courseService.createCourse(this.item);
    this.router.navigate(['courses']);
  }

  public onDurationChange(duration: number): void {
    this.item.duration = duration;
  }

  public onDateChange(creationDate: string): void {
    this.item.creationDate = creationDate;
  }

}
