import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard }                from '../../auth-guard.service';
import { AdminComponent } from '../admin.component';
import {HotelsComponent} from "./hotels.component";

const routes: Routes = [
  {
    path: 'admin/hotels',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          // { path: 'users/:page', component: ManageUsersComponent },
          { path: ':page', component: HotelsComponent },
          // { path: 'dashbord', component: AdminDashbordComponent},
          { path: '', redirectTo: '1', pathMatch: 'full'}
        ]
      }

    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HotelsRoutingModule { }
