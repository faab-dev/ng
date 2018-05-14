import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
// import { HeroesComponent }      from './heroes/heroes.component';
import { HotelsComponent }  from './hotels/hotels.component';
// import { HotelDetailComponent }  from './hotel-detail/hotel-detail.component';
import { PageNotFoundComponent }  from './page-not-found/page-not-found.component';

const routes: Routes = [
  // { path: 'dashboard', component: DashboardComponent },
  // { path: 'heroes', component: HeroesComponent },
  { path: 'hotels', component: HotelsComponent },
  // { path: 'hotel-detail/:id', component: HotelDetailComponent },
  // { path: '', redirectTo: '/hotels', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

// debugging
/*@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
    // other imports here
  ],
  exports: [ RouterModule ]
})*/
//export class AppModule { }

export class AppRoutingModule {}
