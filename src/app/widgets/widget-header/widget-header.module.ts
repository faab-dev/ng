import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetHeaderComponent } from "./widget-header.component";
import {WidgetLanguageModule} from "../widget-language/widget-language.module";
import {LanguageHeaderComponent} from "../widget-language/language-header/language-header.component";
import { HeaderProfileComponent } from './header-profile/header-profile.component';
import { HeaderHotelsComponent } from './header-hotels/header-hotels.component';
import {HotelService} from "../../shared/service/hotel.service";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    CommonModule,
    WidgetLanguageModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  declarations: [
    HeaderProfileComponent,
    HeaderHotelsComponent,
  ],
  exports: [
    HeaderProfileComponent,
    HeaderHotelsComponent,
    LanguageHeaderComponent
  ],
  providers: [
    WidgetHeaderComponent,
    HotelService
  ]
})
export class WidgetHeaderModule { }
