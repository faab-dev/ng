import { Component, OnInit, Input } from '@angular/core';
import {Language} from '../../../models/Language'
import {LanguageService} from "../../../services/language.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-language-login',
  templateUrl: './language-login.component.html',
  styleUrls: ['./language-login.component.css']
})
export class LanguageLoginComponent implements OnInit {

  languages:Language[];

  constructor(
    private languageService: LanguageService,
    public translate: TranslateService
  ) {
    this.languages = this.languageService.getLanguages();
  }

  ngOnInit() {
  }

  private isActive(id:string):boolean {
    return this.languageService.isCurrentLanguage(id);
  }

  getLoginImageSrc(id:string):string {
    return this.isActive(id) ? '/assets/images/flag_'+id+'_on.svg' : '/assets/images/flag_'+id+'_off.svg';
  }

  onClickLanguage(id:string):void {
    console.log("onClickLanguage ");
    console.log("id: "+id);
    this.languageService.setLanguage(id);
  }

}
