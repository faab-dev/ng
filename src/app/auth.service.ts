import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import {tap, delay, catchError, map} from 'rxjs/operators';
// import  'rxjs/add/operator/map';

// import 'rxjs/add/operator/map';

import {environment} from "../environments/environment";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {MessageService} from "./message.service";

export class Login {
  login: string;
  password: string;
}

export class LoggedUser {
  accessToken:string;
  userID:string;
  type:string;
  partnerID:string | any;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  isLoggedIn:boolean = false;
  whenChecked:number = 0;
  redirectUrl:string;
  private url:string;
  private loginUrl:string = 'signin';
  private httpOptions;

  public user$: object;

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
  ){
   this.url = environment.api_url;
   this.httpOptions = new HttpHeaders({
     'Content-Type': 'application/json',
     'X-API-VERSION': String(environment.x_api_version),
     'X-HRC-APP-KEY': String(environment.x_hrc_app_key)
   })
  }

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(val => this.isLoggedIn = true)
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {

  }
}
