import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import {tap, delay, catchError, map} from 'rxjs/operators';

import {User} from './shared/class/user';
import {environment} from "../environments/environment";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {MessageService} from "./message.service";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'X-API-VERSION': '1',
    'X-HRC-APP-KEY': 'e34ab8cb0c62481a1a0a0aa63a8fa344',
    // 'Authorization': '7a67f85b-c59e-40be-91c8-29683047b750'
  })
};

@Injectable({ providedIn: 'root' })
export class AuthService {
  isLoggedIn:boolean = false;
  whenChecked:number = 0;
  redirectUrl:string;

  private url_get_user:string = 'user';
  private url:string;


  user_id:string;
  roles:object[];
  access:object[];
  type:string;
  login:string;
  accessToken:string;


  constructor(
    private http: HttpClient,
    private messageService: MessageService,
  ){
    this.url = String(environment.api_url);
  }

  /** GET user by id. Will 404 if id not found */
  getUser(id: string, accessToken:string): Observable<User> {

    let url = `${this.url+'/'+this.url_get_user}/${id}`,
      httpOptions_access = httpOptions;
    httpOptions_access.headers = httpOptions_access.headers.set('Authorization', accessToken);
    return this.http.get<User>(url, httpOptions_access).pipe(
      tap(_ => this.log(`fetched user id=${id}`)),
      catchError(this.handleError<User>(`getUser id=${id}`))
    );

  }

  /** GET user by id. Will 404 if id not found */
  /*getUser1(id: string, accessToken:string): Observable<boolean> {

    let url = `${this.url+'/'+this.url_get_user}/${id}`,
      httpOptions_access = httpOptions;

    httpOptions_access.headers = httpOptions_access.headers.set('Authorization', accessToken);
    return this.http.get (url, httpOptions_access).pipe(
      tap(( user = (true) ? of(true) : of (false) ) => this.log(`fetched user id=${id}`)),
      catchError(this.handleError(`getUser id=${id}`))
    );

  }*/

  actionLogin(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(val => this.isLoggedIn = true)
    );
  }

  setAuthData(user, auth):boolean{
    if(
      typeof user.id == "string"
      && Array.isArray(user.roles)
      && Array.isArray(user.access)
      && typeof user.login == "string"
      && typeof user.type == "string"
      && typeof auth.accessToken == "string"
    ){
      this.user_id = user.id;
      this.roles = user.roles;
      this.access = user.access;
      this.login = user.login;
      this.type = user.type;
      this.accessToken = auth.accessToken;
      this.isLoggedIn = true;
      this.whenChecked = Math.floor(Date.now() / 1000);
      return true;
    }else{
      return false;
    }
  }

  getAccessToken():string {
    return this.accessToken;
  }

  getLogin():string {
    return this.login;
  }


  private resetAuthData(){
    this.user_id = '';
    this.roles = [];
    this.access = [];
    this.login = '';
    this.type = '';
    this.accessToken = '';
  }

  logout(): void {
    this.resetAuthData();
    window.localStorage.removeItem("token");
    this.isLoggedIn = false;
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.log(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {

  }
}
