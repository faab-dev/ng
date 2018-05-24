import { Component, OnInit, Input } from '@angular/core';
import {Hotel} from "../../shared/class/hotel";
import {GridList} from "../../shared/interface/grid-list";
import {GridListAction} from "../../shared/interface/grid-list-action";
import {GridListItem} from "../../shared/interface/grid-list-item";
import {GridListOperation} from "../../shared/interface/grid-list-operation";
import {Observable, of} from "rxjs/index";
import {map, switchMap} from "rxjs/operators";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {HotelService} from "../../shared/service/hotel.service";


@Component({
  selector: 'app-widget-grid-list',
  templateUrl: './widget-grid-list.component.html',
  styleUrls: ['./widget-grid-list.component.css']
})
export class WidgetGridListComponent  implements OnInit {

  @Input() grid_list:GridList;
  data$:any[];

  private page:number;
  private max:number = 10;
  private count:number;

  constructor(
    private route: ActivatedRoute/*ActivatedRoute*/,
    private hotelService: HotelService,
  ) {
  }

  ngOnInit() {

    this.getData();

    this.route.params.subscribe(params => {

      let page = parseInt(params.page);
      if (!Number.isInteger(page) || page < 1) {
        page = 1;
      }
      this.page = page;
      let service = '';
      switch (this.grid_list.entity) {
        case 'Hotel':
          service = 'hotelService';
          break;
      }
      this[service].getList(this.getPageForRequest(), this.max).subscribe(resp => {
        let count = parseInt(resp.headers.get('x-total-count'));
        if( !Number.isInteger(count) || count < 0 ){
          count = 0;
        }
        this.count = count;

        console.log("resp.body");
        console.log(resp.body);

        this.data$ = resp.body;
      })
    });

    // this.route.paramMap.get('page');
    console.log("WidgetGridListComponent :: ngOnInit");
    /*this.data$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {

        console.log("WidgetGridListComponent :: getData :: pipe :: switchMap");
        let page = parseInt(params.get('page'));
        if (!Number.isInteger(page) || page < 1) {
          page = 1;
        }
        this.page = page;
        let service = '';
        switch (this.entity) {
          case 'Hotel':
            service = 'hotelService';
            break;
        }
        return this[service].getList(this.getPageForRequest(), this.max)
      }));*/
    /*this.data$ = this.route.paramMap.pipe(
        switchMap((params: ParamMap) => {
          // (+) before `params.get()` turns the string into a number
          // this.selectedId = params.get('id');
          return this.hotelService.getHotels();
        })
      );*/
  }

  getTemplateName( key:string ):string {

    if(
      this.grid_list.entity == 'Hotel' && (key == 'id')
    ){
      return 'text';
    }

    if(
      this.grid_list.entity == 'Hotel' && (key == 'name')
    ){
      return 'i18n';
    }

    return '';
  }

  getData() {
    console.log("WidgetGridListComponent :: getData");

    /*var page = this.route.url;

    console.log("page");
    console.log(page);*/

    // debugger;
    /*this.route.paramMap.pipe(

      switchMap((params: ParamMap) => {

        console.log("WidgetGridListComponent :: getData :: pipe :: switchMap");
        let page = parseInt(params.get('page'));
        if( !Number.isInteger(page) || page < 1 ){
          page = 1;
        }
        this.page = page;
        let service = '';
        switch (this.entity){
          case 'Hotel':
            service = 'hotelService';
            break;
        }
        return this[service].getList(this.getPageForRequest(), this.max).subscribe(resp => {
          let count = parseInt(resp.headers.get('x-total-count'));
          if( !Number.isInteger(count) || count < 0 ){
            count = 0;
          }
          this.count = count;

          console.log("resp.body");
          console.log(resp.body);

          return resp.body;
        })
        /!*.pipe(
          resp => {
            let count = parseInt(resp.headers.get('x-total-count'));
            if (!Number.isInteger(count) || count < 0) {
              count = 0;
            }
            this.count = count;

            console.log("resp.body");
            console.log(resp.body);

            this.data$ = resp.body;

            console.log("typeof resp.body");
            console.log(typeof resp.body);

            console.log("Array.isArray(resp.body)");
            console.log(Array.isArray(resp.body));
            return resp.body;
          }
        )*!/
        /!*.subscribe(resp => {
          let count = parseInt(resp.headers.get('x-total-count'));
          if( !Number.isInteger(count) || count < 0 ){
            count = 0;
          }
          this.count = count;

          console.log("resp.body");
          console.log(resp.body);

          return resp.body;
        })*!/
          /!*.map(response => {
            resp => {
              let count = parseInt(resp.headers.get('x-total-count'));
              if (!Number.isInteger(count) || count < 0) {
                count = 0;
              }
              this.count = count;

              console.log("resp.body");
              console.log(resp.body);

              this.data$ = resp.body;
              return resp.body;
            }
          })*!/
      }));*/
  }

  private getPageForRequest():number{
    return ( (this.page-1) * 10 );
  }

}
