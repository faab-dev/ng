import {I18n} from "./I18n";
import {Observable} from "rxjs/index";

export class GridListItem {
  header:string;
  key:string;
  sort:boolean;
};

export class GridListOperation {
  title:string;
  type:string;
};

export class GridListAction {
  title:string;
  title_alt:string;
  class:string;
};

export class GridList {
  entity:string;
  checkbox_delete:boolean;
  clickable:boolean;
  list_items: GridListItem[];
  operations:  GridListOperation[];
  actions: GridListAction[];
  data: Observable<any[]>;
};

export class Hotel {
  id: string;
  status: string;
  name: I18n[];
  settings: any[];
  rooms: object[];
  extra: string;
}


