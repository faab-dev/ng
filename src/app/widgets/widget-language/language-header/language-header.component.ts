import { Component, OnInit } from '@angular/core';
import {Language} from "../../../models/Language";
import {LanguageService} from "../../../services/language.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-language-header',
  templateUrl: './language-header.component.html',
  styleUrls: ['./language-header.component.css']
})
export class LanguageHeaderComponent implements OnInit {

  languages:Language[];
  current_language:Language;
  show_popover_container:boolean = false;
  private on_popover:boolean = false;

  constructor(
    private languageService: LanguageService,
    public translate: TranslateService
  ) {
    this.current_language = this.languageService.current_language;
    this.translate.use(this.current_language.id);
    this.languages = this.languageService.getLanguages();
  }

  ngOnInit() {
  }

  onClickLanguage(language:Language, $event):void{
    if( $event ){
      $event.preventDefault();
    }
    this.current_language = this.languageService.current_language = language;
    this.languageService.setLanguage(language.id);
    console.log("Language is setted. Current Language is "+language.title);
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
