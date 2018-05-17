import { NgModule }       from '@angular/core';
// import { CommonModule }   from '@angular/common';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Diagnostic only: inspect router configuration
import { Router } from '@angular/router';

import { AppComponent }         from './app.component';
import { AppRoutingModule }     from './app-routing.module';

import { LoginModule }      from './login/login.module';
// import { HotelsModule }    from './hotels/hotels.module';
// import { UsersModule }      from './users/users.module';
import { AdminModule }      from './admin/admin.module';

import { ComposeMessageComponent } from './compose-message/compose-message.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { DialogService }           from './dialog.service';
import { ConfigComponent } from './config/config.component';


@NgModule({
  imports: [
    // CommonModule,

    BrowserModule,
    FormsModule,
    HttpClientModule,

    AdminModule,
    // HotelsModule,
    // UsersModule,
    LoginModule,

    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    AppComponent,
    ComposeMessageComponent,
    PageNotFoundComponent,
    ConfigComponent,
  ],
  providers: [
    DialogService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
