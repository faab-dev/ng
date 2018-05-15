import { switchMap } from 'rxjs/operators';
import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { slideInDownAnimation } from '../../animations';

import { Hotel, HotelService } from '../hotel.service';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css'],
  animations: [ slideInDownAnimation ]
})
export class HotelDetailComponent implements OnInit {

  // hotel: Hotel;
  // @Input() hotel: Hotel;
  hotel$: Observable<Hotel>;

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private hotelService: HotelService
  ) { }

  ngOnInit() {

    this.hotel$ = this.route.paramMap.pipe(
        switchMap((params: ParamMap) =>
            this.hotelService.getHotel(params.get('id')))
    );
    // this.getHotel();
  }


  /*getHotel(): void {
    // const id = +this.route.snapshot.paramMap.get('id');
    let id = this.route.snapshot.paramMap.get('id');
    this.hotelService.getHotel(id)
      .subscribe(hotel => this.hotel$ = hotel);


  }*/

  gotoHotels(hotel: Hotel) {
    let hotelId = hotel ? hotel.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/hotels', { id: hotelId, foo: 'foo' }]);
  }


}
