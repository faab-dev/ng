import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HotelListComponent }    from './hotel-list/hotel-list.component';
import { HotelDetailComponent }  from './hotel-detail/hotel-detail.component';

const hotelsRoutes: Routes = [
  { path: 'hotels',  component: HotelListComponent, data: { title: 'Hotel List' } },
  { path: 'hotel/:id', component: HotelDetailComponent }
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
