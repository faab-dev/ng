import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComposeMessageComponent }  from './compose-message/compose-message.component';
import { PageNotFoundComponent }  from './page-not-found/page-not-found.component';

import { CanDeactivateGuard }      from './can-deactivate-guard.service';

const appRoutes: Routes = [
  {
    path: 'compose',
    component: ComposeMessageComponent,
    outlet: 'popup'
  },
  { path: '',   redirectTo: '/admin/hotels', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CanDeactivateGuard
  ]
})
export class AppRoutingModule {}
