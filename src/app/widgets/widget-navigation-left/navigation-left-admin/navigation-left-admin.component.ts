import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  group
} from '@angular/animations';



@Component({
  selector: 'app-navigation-left-admin',
  templateUrl: './navigation-left-admin.component.html',
  styleUrls: ['./navigation-left-admin.component.css'],
  animations: [
    trigger('menuState', [
      state('active', style({
        'max-height': '500px', 'opacity': '1', 'visibility': 'visible'
      })),
      state('inactive', style({
        'max-height': '0px', 'opacity': '0', 'visibility': 'hidden'
      })),
      transition('active => inactive', [group([
        animate('300ms ease-in-out', style({
          'max-height': '0px'
        })),
        animate('600ms ease-in-out', style({
          'opacity': '0'
        })),

        animate('700ms ease-in-out', style({
          'visibility': 'hidden'
        }))
        ]
      )]),
      transition('inactive => active', [group([
        animate('500ms ease-in-out', style({
          'max-height': '500px'
        })),
        animate('500ms ease-in-out', style({
          'visibility': 'visible'
        })),

        animate('800ms ease-in-out', style({
          'opacity': '1'
        }))
        ]
      )])
    ])
  ]
})

export class NavigationLeftAdminComponent implements OnInit {

  private menu_item_active = 'hotels';

  menu_items:string[] = [
    'hotels',
    'motivations',
    'users',
    'configuration',
    'import',
  ]

  public state = 'active';

  constructor(
    public translate: TranslateService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    // this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) => {
    //     params.get('id')
    //   })
    // );

    /*console.log("this.route.snapshot.paramMap");
    console.log(this.route.snapshot.paramMap);*/

    // this.log(this.route.snapshot);

  }

  private log(snapshoot){
    console.log("snapshoot");
    if( !snapshoot._urlSegment.segments || !snapshoot._urlSegment.segments[1] || snapshoot._urlSegment.segments[1]['path'] ){
      this.menu_item_active = 'hotels';
    }

    this.menu_item_active = snapshoot._urlSegment.segments[1]['path'];

  }

  getTitle():string{
    return (this.state === 'active') ? 'navigation.left.admin.title_alt.active' : 'navigation.left.admin.title_alt.inactive';
  }

  isActive(item:string):boolean {
    return (item === this.menu_item_active) ? true : false;
  }

  toggleState() {
    this.state = this.state === 'active' ? 'inactive' : 'active';
  }

  onClickMenuItem(menu_item:string, $event):void {
    if($event){
      $event.preventDefault();
    }

    if(!menu_item){
      return;
    }

    if(menu_item == 'main_menu'){
      // @develop animation
      this.toggleState();
      return;
    }

    if(this.menu_items.indexOf(menu_item) < 0 ){
      return;
    }

    this.menu_item_active = menu_item;
    console.log("onClickMenuItem: "+menu_item);
  }

}
