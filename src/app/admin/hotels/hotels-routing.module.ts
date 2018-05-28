import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard }                from '../../auth-guard.service';
import { AdminComponent } from '../admin.component';
import {HotelsComponent} from "./hotels.component";
import {HotelsCreateComponent} from "./hotels-create/hotels-create.component";
import {HotelsEditComponent} from "./hotels-edit/hotels-edit.component";
import {HotelsCopyComponent} from "./hotels-copy/hotels-copy.component";

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
          { path: 'create', component: HotelsCreateComponent },
          { path: 'edit',  redirectTo: '1', pathMatch: 'full' },
          { path: 'edit/:hotel_id', component: HotelsEditComponent },
          { path: 'copy',  redirectTo: '1', pathMatch: 'full' },
          { path: 'copy/:hotel_id', component: HotelsCopyComponent },
          { path: ':page', component: HotelsComponent },
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
