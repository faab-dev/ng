import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import {HotelsRoutingModule} from "./hotels-routing.module";
import {WidgetGridListModule} from "../../widgets/widget-grid-list/widget-grid-list.module";
import {HttpClient} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HotelsComponent} from "./hotels.component";
import { HotelsCreateComponent } from './hotels-create/hotels-create.component';
import { HotelsEditComponent } from './hotels-edit/hotels-edit.component';
import { HotelsCopyComponent } from './hotels-copy/hotels-copy.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HotelsRoutingModule,
    WidgetGridListModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  declarations: [
    HotelsComponent,
    HotelsCreateComponent,
    HotelsEditComponent,
    HotelsCopyComponent
  ]
})
export class HotelsModule { }
