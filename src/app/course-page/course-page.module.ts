import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseListItemComponent } from './course-list-item/course-list-item.component';
import { CourseSearchComponent } from './course-search/course-search.component';



@NgModule({
  declarations: [CourseListComponent, CourseListItemComponent, CourseSearchComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CourseListComponent,
    CourseListItemComponent,
    CourseSearchComponent,
    FormsModule
  ]
})
export class CoursePageModule { }
