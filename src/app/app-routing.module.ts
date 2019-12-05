import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CourseListComponent } from './course-list-page/course-list/course-list.component';
import { CourseAddComponent } from './course-add-page/course-add/course-add.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

const routes: Routes =  [
  { path: '', component: LoginPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'courses', component: CourseListComponent },
  { path: 'courses/new', component: CourseAddComponent },
  { path: 'courses/:id', component: CourseAddComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
