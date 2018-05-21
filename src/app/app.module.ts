import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule }  from '@angular/platform-browser';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { FormsModule }    from '@angular/forms';
import { HttpClient, HttpClientModule }    from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Diagnostic only: inspect router configuration
import { Router } from '@angular/router';

import { AppComponent }         from './app.component';
import { AppRoutingModule }     from './app-routing.module';

import { LoginModule }      from './login/login.module';
import { AdminModule }      from './admin/admin.module';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import {WidgetLanguageModule} from "./widgets/widget-language/widget-language.module";
import {LanguageService} from "./services/language.service";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AdminModule,
    LoginModule,
    WidgetLanguageModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  providers: [
    LanguageService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
