import { Component, OnInit } from '@angular/core';
import {I18n} from "../../../models/I18n";
import {Hotel} from "../../../models/Hotel";
import {map} from "rxjs/operators";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs/index";
import {HotelService} from "../../../services/hotel.service";
import {TranslateService} from "@ngx-translate/core";
import {LanguageService} from "../../../services/language.service";

@Component({
  selector: 'app-header-hotels',
  templateUrl: './header-hotels.component.html',
  styleUrls: ['./header-hotels.component.css']
})
export class HeaderHotelsComponent implements OnInit {

  select_hotels$: Observable<Hotel[]>;

  selected_hotel_id: string;

  constructor(
    private route: ActivatedRoute,
    private hotelService: HotelService,
    public translate: TranslateService,
    private language: LanguageService
  ) {
    this.selected_hotel_id = this.hotelService.selected_hotel_id;
    this.translate.use(this.language.getCurrentLanguageId());
  }

  ngOnInit() {

    this.select_hotels$ = this.hotelService.getHotels()
      .pipe(map( (hotels:Hotel[]) => {
        return hotels;
      }))


  }

  getName(hotel_name:I18n[]):string{
    for (var i = 0; i < hotel_name.length; i++) {
      let item = hotel_name[i];
      if( !item.language || typeof item.value !== 'string' || item.language !== this.translate.currentLang ){
        continue;
      }
      return item.value;
    }
    return '';
  }

  onChange(id:string){
    console.log("onChange: HotelID");
    console.log('typeof: '+typeof id);
    console.log(id);

    if( id === '' ){
      this.selected_hotel_id = this.hotelService.selected_hotel_id = id;
    }

  }

}
