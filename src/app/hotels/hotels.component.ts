import { Component, OnInit } from '@angular/core';

/*import { HotelListComponent }    from './hotel-list.component';
import { HotelDetailComponent }  from './hotel-detail.component';*/

import { Hotel } from '../hotel';
import { HotelService } from '../hotel.service';

/*@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})*/

export class HotelsComponent implements OnInit {

  hotels: Hotel[];

  constructor(private hotelService: HotelService) { }

  ngOnInit() {
    this.getHotels();
  }

  getHotels(): void {
    this.hotelService.getHotels()
      .subscribe(hotels => this.hotels = hotels);
  }


}

/*add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.hotelService.addHotel({ name } as Hotel)
      .subscribe(hotel => {
        this.hotels.push(hotel);
      });
  }

  delete(hotel: Hotel): void {
    this.hotels = this.hotels.filter(h => h !== hotel);
    this.hotelService.deleteHotel(hotel).subscribe();
  }*/

