import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetGridListComponent } from './widget-grid-list.component';
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {HttpClient} from "@angular/common/http";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import { GridListPagerComponent } from './grid-list-pager/grid-list-pager.component';
import { GridListSearchComponent } from './grid-list-search/grid-list-search.component';
import { GridListActionsComponent } from './grid-list-actions/grid-list-actions.component';
import { TdTextComponent } from './td-text/td-text.component';
import { TdI18nComponent } from './td-i18n/td-i18n.component';

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
    }),
  ],
  exports: [WidgetGridListComponent],
  declarations: [
    WidgetGridListComponent,
    GridListPagerComponent,
    GridListSearchComponent,
    GridListActionsComponent,
    TdTextComponent,
    TdI18nComponent
  ],
  // providers: [WidgetGridListComponent]
})
export class WidgetGridListModule { }
