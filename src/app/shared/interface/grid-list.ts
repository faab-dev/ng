import {GridListAction} from "./grid-list-action";
import {GridListItem} from "./grid-list-item";
import {GridListOperation} from "./grid-list-operation";


export interface GridList {
  entity:string;
  checkbox_delete:boolean;
  clickable:boolean;
  list_items: GridListItem[];
  operations:  GridListOperation[];
  actions: GridListAction[];
  sort: {
    key:string,
    direction:string,
  }
}
