import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageLoginComponent } from './language-login/language-login.component';
import { LanguageHeaderComponent } from './language-header/language-header.component';

@NgModule({
  imports: [
    CommonModule,
    // LanguageHeaderComponent
  ],
  exports: [
    LanguageHeaderComponent,
    // LanguageLoginComponent
  ],
  declarations: [
    // LanguageLoginComponent,
    // LanguageHeaderComponent
    // LanguageHeaderComponent
    LanguageHeaderComponent
  ]
})
export class WidgetLanguageModule { }
