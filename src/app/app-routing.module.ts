import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent }  from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  // { path: 'hotels', component: HotelsComponent },
  // { path: 'hotel-detail/:id', component: HotelDetailComponent },
  // { path: '', redirectTo: '/hotels', pathMatch: 'full' },
  { path: '',   redirectTo: '/hotels', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

/*
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
*/

// debugging
@NgModule({
  imports: [
    RouterModule.forRoot(
        appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    // other imports here
  ],
  exports: [ RouterModule ]
})
//export class AppModule { }

export class AppRoutingModule {}
