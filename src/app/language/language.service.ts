import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";

export class Language {
  id: string;
  title: string;
  wysiwyg_code: string;
}

@Injectable({
  providedIn: 'root'
})

export class LanguageService {
  languages:Language[];
  current_language:Language;
  constructor() {
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

  getLanguages():Language[]{
    return this.languages;
  }

  isCurrentLanguage(id:string):boolean {
    return (this.current_language.id === id ) ? true : false;
  }
}
