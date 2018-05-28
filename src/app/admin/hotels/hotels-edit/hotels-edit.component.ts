import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit  } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import {Hotel} from "../../../shared/class/hotel";
import {HotelService} from "../../../shared/service/hotel.service";
import {AssetService} from "../../../shared/service/asset.service";
import {Observable} from "rxjs/index";
import {TranslateService} from "@ngx-translate/core";
import { } from '@types/googlemaps';


@Component({
  selector: 'app-hotels-edit',
  templateUrl: './hotels-edit.component.html',
  styleUrls: ['./hotels-edit.component.css']
})
export class HotelsEditComponent implements OnInit, OnDestroy, AfterViewInit {

  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  model:Hotel = new Hotel(
  '0b69f2af-cc11-48e1-92ef-a408f0c38f2d',
  'OK',
  [
    {"whenCreated":1527158382635,"whenUpdated":1527158382635,"id":"0b2934a1-7f02-444a-b773-cfcf145f00d0","language":"ru","value":"Test2"},
    {"whenCreated":1527158382715,"whenUpdated":1527158382715,"id":"9b31fac5-b114-475f-bb99-d530316ee9c1","language":"en","value":""}
    ],
[],
[],
  ""
    );


  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  @ViewChild('gmap') gmapElement:any;
  map:google.maps.Map;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public translate: TranslateService,
    private service: HotelService,
    private assetService: AssetService
  ) { }

  ngOnInit() {

    console.log("ngOnInit");
    this.route.params.subscribe(params => {

      let hotel_id = String(params.hotel_id).trim();

      if( !hotel_id ){
        //@TODO develop error handler
      }

      this.service.getHotel(hotel_id).subscribe(
        resp => {
          console.log("resp");
          console.log(resp);

          this.model = resp;
        }
      )
    });



  }

  ngOnDestroy() {
    this.assetService.removeScript('google-map');
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
    this.assetService.loadScript('google-map', this.onLoadScript);
  }

  isCurrentLanguage(language:string):boolean{
    console.log("language: "+language);
    if( language == this.translate.currentLang ){
      return true
    }
    return false;
  }

  isExist(key:string):boolean{
    if( this.model && typeof this.model[key] !== "undefined" ){
      return true;
    }
    return false;
  }

  getHotel():void{

  }

  onClickButtonBackToList(){
    this.router.navigate(['admin/hotels/1']);
  }

  onLoadScript(){
    console.log("HotelsEditComponent :: onLoadScript");
    var mapProp = {
      center: new google.maps.LatLng(18.5793, 73.8143),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    console.log("this.gmapElement");
    console.log(this.gmapElement);

    // this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }





}
