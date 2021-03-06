import {Component, Input, OnInit} from '@angular/core';
import {GridListAction} from "../../../shared/interface/grid-list-action";

@Component({
  selector: 'app-grid-list-actions',
  templateUrl: './grid-list-actions.component.html',
  styleUrls: ['./grid-list-actions.component.css']
})
export class GridListActionsComponent {

  @Input() actions:GridListAction[];

  constructor() { }
}
