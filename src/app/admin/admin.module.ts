import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminDashbordComponent } from './admin-dashbord/admin-dashbord.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ManageHotelsComponent } from './manage-hotels/manage-hotels.component';
import { WidgetHeaderComponent } from "../widgets/widget-header/widget-header.component";
import { WidgetHeaderModule } from "../widgets/widget-header/widget-header.module";
import { HotelsComponent } from './hotels/hotels.component';


@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    WidgetHeaderModule
  ],
  declarations: [
    WidgetHeaderComponent,
    AdminComponent,
    AdminDashbordComponent,
    ManageUsersComponent,
    ManageHotelsComponent,
    HotelsComponent,
    // WidgetHeaderComponent

  ]
})
export class AdminModule { }
