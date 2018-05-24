import { Component, OnInit, Input } from '@angular/core';
import {GridList, GridListAction, GridListItem, GridListOperation, Hotel} from "../../shared/models/Hotel";
import {Observable} from "rxjs/index";
import {map, switchMap} from "rxjs/operators";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {HotelService} from "../../shared/services/hotel.service";


@Component({
  selector: 'app-widget-grid-list',
  templateUrl: './widget-grid-list.component.html',
  styleUrls: ['./widget-grid-list.component.css']
})
export class WidgetGridListComponent  implements OnInit {

  @Input() entity:string;
  @Input() checkbox_delete:boolean;
  @Input() clickable:boolean;
  @Input() list_items:GridListItem[];
  @Input() operations:GridListOperation[];
  @Input() actions:GridListAction[];
  data$: Observable<Hotel[]>;

  private page:number;
  private max:number = 10;
  private count:number;

  constructor(
    private route: ActivatedRoute,
    private hotelService: HotelService,
  ) {
  }

  ngOnInit() {
    this.data$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
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
        return this[service].getList(this.getPageForRequest(), this.max)
          /*.pipe(
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
          );*/
          .subscribe(resp => {
            let count = parseInt(resp.headers.get('x-total-count'));
            if( !Number.isInteger(count) || count < 0 ){
              count = 0;
            }
            this.count = count;

            console.log("resp.body");
            console.log(resp.body);

            this.data$ = resp.body;
            return resp.body;
          });
      })

    );
  }

  getTemplateName( key:string ):string {

    if(
      this.entity == 'Hotel' && (key == 'id')
    ){
      return 'text';
    }

    if(
      this.entity == 'Hotel' && (key == 'name')
    ){
      return 'i18n';
    }

    return '';
  }

  private getPageForRequest():number{
    return ( (this.page-1) * 10 );
  }

}
