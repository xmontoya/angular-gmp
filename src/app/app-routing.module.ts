import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { CourseListComponent } from './course-list-page/course-list/course-list.component';
import { CourseAddComponent } from './course-add-page/course-add/course-add.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes =  [
  { path: '', component: LoginPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'courses', component: CourseListComponent, canActivate: [AuthGuard] },
  { path: 'courses/new', component: CourseAddComponent, canActivate: [AuthGuard] },
  { path: 'courses/:id', component: CourseAddComponent, canActivate: [AuthGuard] },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
