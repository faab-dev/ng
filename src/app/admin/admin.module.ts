import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminDashbordComponent } from './admin-dashbord/admin-dashbord.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ManageHotelsComponent } from './manage-hotels/manage-hotels.component';
import { WidgetHeaderComponent } from "../widgets/widget-header/widget-header.component";
import { WidgetHeaderModule } from "../widgets/widget-header/widget-header.module";
import { HotelsComponent } from './hotels/hotels.component';
import {NavigationLeftAdminComponent} from "../widgets/widget-navigation-left/navigation-left-admin/navigation-left-admin.component";
import {HttpClient} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {WidgetGridListComponent} from "../widgets/widget-grid-list/widget-grid-list.component";
import {WidgetGridListModule} from "../widgets/widget-grid-list/widget-grid-list.module";
import {HotelsModule} from "./hotels/hotels.module";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    WidgetHeaderModule,
    HotelsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserModule,
    BrowserAnimationsModule
  ],
  declarations: [
    WidgetHeaderComponent,
    AdminComponent,
    AdminDashbordComponent,
    ManageUsersComponent,
    ManageHotelsComponent,
    NavigationLeftAdminComponent

  ]
})
export class AdminModule { }
