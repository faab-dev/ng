import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AdminDashbordComponent } from './admin-dashbord/admin-dashbord.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ManageHotelsComponent } from './manage-hotels/manage-hotels.component';

import { AuthGuard }                from '../auth-guard.service';
import {HotelsComponent} from "./hotels/hotels.component";

const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          { path: 'users/:page', component: ManageUsersComponent },
          // { path: 'hotels', redirectTo: 'hotels/1' },
          { path: 'dashbord', component: AdminDashbordComponent},
          { path: '', redirectTo: '/admin/hotels/1', pathMatch: 'full'}
        ]
      }

    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {}
