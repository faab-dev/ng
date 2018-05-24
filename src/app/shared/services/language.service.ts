import { Injectable } from '@angular/core';
import {Language} from "../models/Language";
import {environment} from "../../../environments/environment";
import {TranslateService} from "@ngx-translate/core";

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  languages:Language[];
  current_language:Language;
  constructor(
    public translate: TranslateService
  ) {
    this.languages = [];
    let languages = environment.languages;
    for (var i = 0; i < languages.length; i++) {
      let item = languages[i];
      if( !item.id || !item.title || !item.wysiwyg_code ){
        continue;
      }
      let language = {
        id: String(item.id),
        title: String(item.title),
        wysiwyg_code: String(item.wysiwyg_code),
      }
      this.languages.push(language);
      if( item.id == 'ru' ){
        this.current_language = language;
      }

    }
  }

  getCurrentLanguageId():string{
    return this.current_language.id;
  }

  getLanguages():Language[]{
    return this.languages;
  }

  setLanguage(id:string):void{
    console.log("LanguageService::setLanguage");
    var languages = this.getLanguages();
    for (var i = 0; i < languages.length; i++) {
        var item = languages[i];
        if( !item.id || item.id !== id ){
          continue;
        }
        this.current_language = item;
        console.log("id: "+id);
        this.translate.use(id);
        break;
    }
  }

  isCurrentLanguage(id:string):boolean {
    return (this.current_language.id === id ) ? true : false;
  }

}
