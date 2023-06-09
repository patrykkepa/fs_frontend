import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";

import { AuthLoginRoutingModule } from './auth-login-routing.module';
import { AuthLoginComponent } from './auth-login.component';
import { AuthLoginPageModule } from '../../ui/auth-login-page/auth-login-page.module';
import { MenuModule } from 'src/app/shared/menu/menu.module';


@NgModule({
  declarations: [
    AuthLoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthLoginRoutingModule,
    AuthLoginPageModule,
    MenuModule
  ]
})
export class AuthLoginModule { }
