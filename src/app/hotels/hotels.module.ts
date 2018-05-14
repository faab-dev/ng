import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { HotelListComponent }    from './hotel-list.component';
import { HotelDetailComponent }  from './hotel-detail.component';

import { HotelService } from '../hotel.service';

import { HotelsRoutingModule } from './hotels-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HotelsRoutingModule
  ],
  declarations: [
    HotelListComponent,
    HotelDetailComponent
  ],
  providers: [ HotelService ]
})
export class HotelsModule {}
