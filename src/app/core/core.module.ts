import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, BreadcrumbComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    BreadcrumbComponent,
    FooterComponent
  ]
})
export class CoreModule { }
