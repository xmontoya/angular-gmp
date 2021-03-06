import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CoreModule } from '../core/core.module';

import { CourseAddComponent } from './course-add/course-add.component';
import { CourseAddDateComponent } from './course-add-date/course-add-date.component';
import { CourseAddDurationComponent } from './course-add-duration/course-add-duration.component';
import { CourseAddAuthorComponent } from './course-add-author/course-add-author.component';
import { BreadcrumbComponent } from '../core/breadcrumb/breadcrumb.component';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    CourseAddComponent, 
    CourseAddDateComponent, 
    CourseAddDurationComponent, 
    CourseAddAuthorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
    CoreModule
  ],
  exports: [
    FormsModule
  ]
})
export class CourseAddPageModule { }
