import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-td-text',
  templateUrl: './td-text.component.html',
  styleUrls: ['./td-text.component.css']
})
export class TdTextComponent implements OnInit {

  @Input() data:string;

  constructor() { }

  ngOnInit() {
  }

}
