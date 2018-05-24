import {I18n} from "../interface/i18n";
import {Room} from "./room";

export class Hotel {
  id: string;
  status: string;
  name: I18n[];
  settings: any[];
  rooms: Room[];
  extra: string;
}
