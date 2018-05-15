import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent }    from './users.component';
import { UsersHomeComponent } from './users-home/users-home.component';
import { UserDetailComponent }  from './user-detail/user-detail.component';
import { UserListComponent }  from './user-list/user-list.component';

const usersRoutes: Routes = [
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
            component: UserDetailComponent
          },
          {
            path: '',
            component: UsersHomeComponent
          }
        ]
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
  ]
})
export class UsersRoutingModule { }

/*@NgModule({
  imports: [
    RouterModule.forChild(usersRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UsersRoutingModule { }*/
// export class HotelsRoutingModule { }
