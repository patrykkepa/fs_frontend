import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLoginPageComponent } from './auth-login-page.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AuthLoginPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    AuthLoginPageComponent
  ]
})
export class AuthLoginPageModule { }
