import { Component, OnInit, Input } from '@angular/core';
import {Language} from '../../../models/Language'
import {LanguageService} from "../../../services/language.service";

@Component({
  selector: 'app-language-login',
  templateUrl: './language-login.component.html',
  styleUrls: ['./language-login.component.css']
})
export class LanguageLoginComponent implements OnInit {

  /*@Input() src:string;
  @Input() title:string;
  @Input() isActive:boolean;*/

  languages:Language[];

  constructor(
    private languageService: LanguageService
  ) {
    this.languages = this.languageService.getLanguages();
  }

  ngOnInit() {
  }

  isActive(id:string):boolean {
    return this.languageService.isCurrentLanguage(id);
  }

}
