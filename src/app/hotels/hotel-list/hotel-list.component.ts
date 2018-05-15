import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Hotel, HotelService } from '../hotel.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})

// ['/hero', hero.id]


export class HotelListComponent implements OnInit {



  hotels$: Observable<Hotel[]>;

  private selectedId: string;


  constructor(
    private hotelService: HotelService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // this.getHotels();
    this.hotels$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = params.get('id');
        return this.hotelService.getHotels();
      })
    );
  }

  getHotels(): void {


    /*this.hotelService.getHotels()
      .subscribe(hotels => this.hotels = hotels);

    this.hotels = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = params.get('id');
        return this.hotelService.getHotels();
      })
    );*/
  }


}
