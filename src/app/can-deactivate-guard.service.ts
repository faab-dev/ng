import { Injectable }           from '@angular/core';
import { Observable }           from 'rxjs';
import { CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot }  from '@angular/router';
import {LoginComponent} from "./login/login.component";

// @TODO change LoginComponent to other component
// import { UserDetailComponent } from './users/user-detail/user-detail.component';



@Injectable()
export class CanDeactivateGuard implements CanDeactivate<LoginComponent> {

  canDeactivate(
    component: LoginComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    // Get the User ID
    console.log(route.paramMap.get('id'));

    // Get the current URL
    console.log(state.url);

    return true;

    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
    /*if (!component.user$ || component.user$.login === component.editLogin) {
      return true;
    }*/
    // Otherwise ask the user with the dialog service and return its
    // observable which resolves to true or false when the user decides
    // return component.dialogService.confirm('Discard changes?');
  }
}
