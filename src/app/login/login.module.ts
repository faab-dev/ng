import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule }      from './login-routing.module';
import { LoginComponent } from './login.component';
import {LanguageLoginComponent} from "../widgets/widget-language/language-login/language-login.component";


@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  declarations: [
    LanguageLoginComponent,
    LoginComponent
  ]
})
export class LoginModule { }
