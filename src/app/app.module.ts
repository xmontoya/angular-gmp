import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageModule } from './login-page/login-page.module';
import { CoreModule } from './core/core.module';
import { CourseListPageModule } from './course-list-page/course-list-page.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginPageModule,
    CoreModule,
    CourseListPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
