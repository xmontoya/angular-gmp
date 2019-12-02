import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CourseListComponent } from './course-list/course-list.component';
import { CourseListItemComponent } from './course-list-item/course-list-item.component';
import { CourseSearchComponent } from './course-search/course-search.component';
import { CourseCardBorderDirective } from './directives/course-card-border.directive';
import { CourseModalConfirmComponent } from './course-modal-confirm/course-modal-confirm.component';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    CourseListComponent, 
    CourseListItemComponent, 
    CourseSearchComponent, 
    CourseCardBorderDirective,
    CourseModalConfirmComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    PipesModule
  ],
  exports: [
    CourseListComponent,
    CourseListItemComponent,
    CourseSearchComponent,
    CourseModalConfirmComponent,
    FormsModule
  ],
  entryComponents: [CourseModalConfirmComponent]
})
export class CourseListPageModule { }
