import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, BreadcrumbComponent, PageNotFoundComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    BreadcrumbComponent,
    FooterComponent,
    PageNotFoundComponent
  ]
})
export class CoreModule { }
