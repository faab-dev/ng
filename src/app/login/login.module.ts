import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule }      from './login-routing.module';
import { LoginComponent } from './login.component';
import {LanguageLoginComponent} from "../widgets/widget-language/language-login/language-login.component";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
// import {HttpLoaderFactory} from "../app.module";
import {HttpClient} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}



@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  declarations: [
    LanguageLoginComponent,
    LoginComponent
  ]
})
export class LoginModule { }
