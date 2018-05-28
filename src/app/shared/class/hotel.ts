import {I18n} from "../interface/i18n";
import {Room} from "./room";

export class Hotel {



  constructor(
    public id: string,
    public status: string,
    public name: I18n[],
    public settings: any[],
    public rooms: Room[],
    public extra: string
  ){

  }
}
