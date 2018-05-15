import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent }         from './app.component';
import { AppRoutingModule }     from './app-routing.module';
import { HotelsModule }    from './hotels/hotels.module';
import { UsersModule }      from './users/users.module';
import { MessagesComponent }    from './messages/messages.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HotelsModule,
    UsersModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,

    // HotelsComponent,
    MessagesComponent,
    PageNotFoundComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
