import { Component, OnInit } from '@angular/core';

import { Hotel } from '../hotel';
import { HotelService } from '../hotel.service';

@Component({
//  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})




/*@Component({
    selector: 'app-hotels',
    templateUrl: './hotels.component.html',
    styleUrls: ['./hotels.component.css']
})*/

export class HotelListComponent implements OnInit {

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