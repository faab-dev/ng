import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageHeaderComponent } from './language-header/language-header.component';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [
    LanguageHeaderComponent,
    // LanguageLoginComponent
  ],
  declarations: [
    // LanguageLoginComponent,
    // LanguageHeaderComponent
    // LanguageHeaderComponent
    LanguageHeaderComponent
  ]
})
export class WidgetLanguageModule { }
