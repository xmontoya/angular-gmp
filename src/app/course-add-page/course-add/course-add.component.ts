import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
    id: 0,
    name: '',
    date: '',
    length: 0,
    description: '',
    authors: [],
    isTopRated: false
  };

  courseNav = { url: '', title: ''};
  
  constructor(
    private courseService: CourseService, 
    private router: Router, 
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.getCourse(id);
    }
  }

  private getCourse(id: string): void {
    this.courseService.getCourseById(id)
      .subscribe(course => {
        if(course.id) {
          this.item = course;
          this.courseNav.url = '/courses/'+this.item.id;
          this.courseNav.title = this.item.name;
        } else {
          this.router.navigate(['404']);
        }
      });
  }

  public create(): void{
    if(this.item.id){
      this.courseService.updateCourse(this.item)
      .subscribe(() => {
        this.router.navigate(['courses']);
      });
    } else {
      this.courseService.createCourse(this.item)
      .subscribe(course => {
        this.router.navigate(['courses']);
      });
    }
  }

  public cancel(): void{
    this.router.navigate(['courses']);
  }

  public onDurationChange(duration: number): void {
    this.item.length = duration;
  }

  public onDateChange(creationDate: string): void {
    this.item.date = creationDate;
  }

  public onAuthorsChange(authors: []): void {
    this.item.authors = authors;
  }

}
