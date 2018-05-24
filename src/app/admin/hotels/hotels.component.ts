import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import {Hotel} from "../../shared/class/hotel";
import {GridList} from "../../shared/interface/grid-list";
import {HotelService} from "../../shared/service/hotel.service";

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  hotels$: Observable<Hotel[]>;
  grid_list: GridList;

  constructor(
    private hotelService: HotelService
  ) {
    this.grid_list = {
      entity: 'Hotel',
      checkbox_delete: true,
      clickable: true,
      list_items: [
        {
          header: 'hotels.name',
          key: 'name',
          sort: false
        },
        {
          header: 'hotels.id',
          key: 'id',
          sort: true
        }
      ],
      operations: [
        { type: "copy", title: "grid_list.operations.copy" },
        { type: "edit", title: "grid_list.operations.edit" }
      ],
      actions: [
        { class: 'btn-success', title: 'grid_list.actions.add.title', title_alt: 'grid_list.actions.add.title_alt' },
        { class: 'btn-danger', title: 'grid_list.actions.delete.title', title_alt: 'grid_list.actions.delete.title_alt' }
      ],
      sort: {
        key: 'whenUpdated',
        direction: 'desc'
      }
    }
  }

  ngOnInit() {
    /*console.log("ngOnInit");
    this.hotels$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        let data = this.hotelService.getList(0, 10);
        this.grid_list.data = data;
        return data;
      })
    );
    this.grid_list.data = this.hotels$;*/
  }



}
