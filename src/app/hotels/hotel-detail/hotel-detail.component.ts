import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Hotel } from '../hotel';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css']
})
export class HotelDetailComponent implements OnInit {

    // hotel: Hotel;
    @Input() hotel: Hotel;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private hotelService: HotelService
    ) { }

    ngOnInit() {

        /*this.hotel = this.route.paramMap.pipe(
            switchMap((params: ParamMap) =>
                this.hotelService.getHotel(params.get('id')))
        );*/
        this.getHotel();
    }



    getHotel(): void {
        // const id = +this.route.snapshot.paramMap.get('id');
        let id = this.route.snapshot.paramMap.get('id');
        this.hotelService.getHotel(id)
            .subscribe(hotel => this.hotel = hotel);
    }

}
