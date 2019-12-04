import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CourseListComponent } from './course-list-page/course-list/course-list.component';
import { CourseAddComponent } from './course-add-page/course-add/course-add.component';


const routes: Routes =  [
  { path: '', component: LoginPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'courses', component: CourseListComponent },
  { path: 'course-add', component: CourseAddComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
