import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent }    from './users.component';
import { UsersHomeComponent } from './users-home/users-home.component';
import { UserDetailComponent }  from './user-detail/user-detail.component';
import { UserListComponent }  from './user-list/user-list.component';

import { CanDeactivateGuard }    from '../can-deactivate-guard.service';

import { UserDetailResolver }   from './user-detail/user-detail-resolver.service';



const usersRoutes: Routes = [
  {
    path: '',
    redirectTo: '/users',
    pathMatch: 'full'
  },
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {
        path: '',
        component: UserListComponent,
        children: [
          {
            path: ':id',
            component: UserDetailComponent,
            canDeactivate: [CanDeactivateGuard]
          },
          {
            path: '',
            component: UsersHomeComponent
          }
        ]
      }
    ]
  },
  /*{
    path: '',
    redirectTo: '/users',
    pathMatch: 'full'
  },*/
  {
    path: 'user',
    component: UserDetailComponent,
    pathMatch: 'full',
    children: [
      {
        path: ':id',
        component: UserDetailComponent,
        canDeactivate: [CanDeactivateGuard]
      },
      {
        path: '',
        component: UsersHomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(usersRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    UserDetailResolver
  ]
})
export class UsersRoutingModule { }
