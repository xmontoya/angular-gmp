import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginPageComponent } from './login-page.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    CoreModule
  ],
  exports: [
    FormsModule
  ]
})
export class LoginPageModule { }
