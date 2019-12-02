import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseDurationPipe } from './course-duration.pipe';
import { CourseSortPipe } from './course-sort.pipe';


@NgModule({
  declarations: [ CourseDurationPipe, CourseSortPipe ],
  imports: [
    CommonModule
  ],
  exports: [
    CourseDurationPipe,
    CourseSortPipe
  ]
})
export class ApplicationPipesModule { }
