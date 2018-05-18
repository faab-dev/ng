import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header-profile',
  templateUrl: './header-profile.component.html',
  styleUrls: ['./header-profile.component.css']
})
export class HeaderProfileComponent implements OnInit {

  show_popover_container:boolean = false;
  login:string;
  private on_popover:boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.login = this.authService.getLogin();
  }

  ngOnInit() {
  }

  onClickLogout($event):void{
    $event.preventDefault();
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  onClickChangePassword($event):void{
    $event.preventDefault();
    // @TODO Develop change password
    console.log("@TODO Develop change password");
  }

  showPopover(element:string):void{
    this.on_popover = ( element === 'img' ) ? false : true;
    this.show_popover_container = true;
  }


  hidePopover(element:string):void{
    var self = this;
    if( element === 'img' ){

      setTimeout(function () {
        console.log(element);
        if( self.on_popover ){
          return;
        }
        self.hidePopoverPrivate();
      }, 200)
    }else{
      console.log(element);
      self.on_popover = false;
      self.hidePopoverPrivate();
    }
  }

  private hidePopoverPrivate():void{
    this.show_popover_container = false;
  }

}
