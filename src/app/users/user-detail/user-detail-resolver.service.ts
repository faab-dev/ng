import { Injectable }             from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
  ActivatedRouteSnapshot } from '@angular/router';
import { Observable }             from 'rxjs';
import { map, take }              from 'rxjs/operators';

import { User, UserService }  from '../user.service';

@Injectable()
export class UserDetailResolver implements Resolve<User> {
  constructor(private modelService: UserService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
    let id = route.paramMap.get('id');

    return this.modelService.getUser(id).pipe(
      take(1),
      map(user => {
        if (user) {
          return user;
        } else { // id not found
          this.router.navigate(['/users']);
          return null;
        }
      })
    );
  }
}
