import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HotelListComponent }    from './hotel-list.component';
import { HotelDetailComponent }  from './hotel-detail.component';
import {PageNotFoundComponent} from "../page-not-found/page-not-found.component";

const hotelsRoutes: Routes = [
  { path: 'hotels',  component: HotelListComponent },
  // { path: 'hotel/:id', component: HotelDetailComponent }
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(hotelsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HotelsRoutingModule { }
