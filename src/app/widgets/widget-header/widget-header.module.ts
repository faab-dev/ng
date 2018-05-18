import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetHeaderComponent } from "./widget-header.component";
import {WidgetLanguageModule} from "../widget-language/widget-language.module";
import {LanguageHeaderComponent} from "../widget-language/language-header/language-header.component";
import { HeaderProfileComponent } from './header-profile/header-profile.component';
import { HeaderHotelsComponent } from './header-hotels/header-hotels.component';
import {HotelService} from "../../services/hotel.service";
@NgModule({
  imports: [
    CommonModule,
    WidgetLanguageModule
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
