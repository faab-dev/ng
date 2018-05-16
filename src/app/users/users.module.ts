import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { UsersComponent } from './users.component';
import { UsersHomeComponent } from './users-home/users-home.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';

/*import { HotelService } from './hotel.service';*/

import { UsersRoutingModule } from './users-routing.module';
import {UserService} from "./user.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UsersRoutingModule
  ],
  declarations: [
    UsersComponent,
    UsersHomeComponent,
    UserDetailComponent,
    UserListComponent
  ],
  providers: [ /*UserService*/ ]
})
export class UsersModule {}
