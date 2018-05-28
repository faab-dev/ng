import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grid-list-pager',
  templateUrl: './grid-list-pager.component.html',
  styleUrls: ['./grid-list-pager.component.css']
})
export class GridListPagerComponent implements OnInit {

  @Input() page:number;
  @Input() max:number = 10;
  @Input() count_total:number;

  constructor() { }

  ngOnInit() {

  }

  isVisible():void {
    var pagerPagesTotal= Math.ceil( this.count_total / this.max );
    var page = this.page;

    var pagerLimit = 1;
    if(pagerPagesTotal > 10) {
      if (page > 6 && pagerPagesTotal - page >= 6) {
        pagerLimit = page - 5;
      }else if(page > 6 && pagerPagesTotal - page < 6){
        pagerLimit = pagerPagesTotal - 10;
      }
    }

    var newPager_elements = [];

    for(var i=pagerLimit; i<pagerLimit+10; i++){
      if( i <= pagerPagesTotal ){
        newPager_elements.push(i);
      }
    }

    console.log("newPager_elements");
    console.log(newPager_elements);

    /*self.pager_elements(newPager_elements);


    self.pagerLimit(pagerLimit);
    self.pagerPagesTotal(pagerPagesTotal);

    self.currentPage(page);*/
  }

}
