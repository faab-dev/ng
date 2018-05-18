import { Injectable }       from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild
}                           from '@angular/router';
import { AuthService }      from './auth.service';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {canInsertNativeNode} from "@angular/core/src/render3/node_manipulation";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {


    if( route.url[0].path === 'login' ){
      return this.checkLogggedOutArea();
    }

    return this.checkLogggedInArea(state.url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    return this.canActivate(route, state);
  }

  checkLogggedInArea( url: string ): Observable<boolean> {


    return new Observable<boolean> ( observer => {
      this.authService.redirectUrl = url;

      if ( this.authService.isLoggedIn && (Math.floor(Date.now() / 1000) - this.authService.whenChecked) < 300 ) {
        observer.next(true);
      }else{
        var token = window.localStorage.getItem("token");
        if( token === null ){
          this.router.navigate(['/login']);
          observer.next(false);
        }else{
          var token_object = JSON.parse(token);
          this.authService.getUser(token_object.id, token_object.accessToken).subscribe( user => {
            if(!user) {
              this.router.navigate(['/login']);
              observer.next(false);
            } else {
              if( !this.authService.setAuthData(user, {accessToken: token_object.accessToken}) ){
                this.router.navigate(['/login']);
                observer.next(false);
              }else{
                observer.next(true);
              }
            }
          });
        }
      }
    })





  }

  checkLogggedOutArea(): Observable<boolean> {

    return new Observable<boolean> ( observer => {

      var token = window.localStorage.getItem("token");
      if( token === null ){
        observer.next(true);
      }else{
        var token_object = JSON.parse(token);
        this.authService.getUser(token_object.id, token_object.accessToken).subscribe( user => {

          if(!user) {
            this.authService.logout();
            observer.next(true);
          } else {
            if( !this.authService.setAuthData(user, {accessToken: token_object.accessToken}) ){
              this.authService.logout();
              observer.next(true);
            }else{
              this.router.navigate(['/admin/hotels']);
              observer.next(false);
            }
          }
        });
      }

    })


  }

  logout( message:string ){
    console.log("Auth-Guard :: "+message)
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
