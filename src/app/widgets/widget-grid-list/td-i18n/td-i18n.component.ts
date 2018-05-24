import { Component, OnInit, Input } from '@angular/core';
import {I18n} from "../../../shared/interface/i18n";

@Component({
  selector: 'app-td-i18n',
  templateUrl: './td-i18n.component.html',
  styleUrls: ['./td-i18n.component.css']
})
export class TdI18nComponent implements OnInit {

  @Input() data:I18n[];

  constructor() { }

  ngOnInit() {
  }

}
