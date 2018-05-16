/*



*/
import { Injectable } from '@angular/core';
//import { BehaviorSubject } from 'rxjs';
// import { map } from 'rxjs/operators';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';



export class User {
  public id: string; // number;
  status: string;
  name: string; // string[]
  type: string;
  public login: string;
  appID: string;
  partnerID: string | null;
  hotelID: string | null;
  access: object[];
  roles: object[];
  whenCreated: number;
  whenUpdated: number;
}

// [{"whenCreated":1494941374000,"whenUpdated":1494941374000,"id":"71aa06bf-c59c-431b-a401-1b5a6bbe7e10","status":"APPROVED","name":"HRC ROOT ADMIN","type":"ADMIN_HRC","login":"admin","appID":"3211140b-f64e-4d51-bc11-f64760fd8a9f","partnerID":"916a0b79-28a7-4934-91b3-221c9fb9e8c8","access":[],"roles":[]}]

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { MessageService } from '../message.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'X-API-VERSION': '1',
    'X-HRC-APP-KEY': 'e34ab8cb0c62481a1a0a0aa63a8fa344',
    'Authorization': '7a67f85b-c59e-40be-91c8-29683047b750'
  })
};


function myPrivateFunction() {
  console.log("My property: " + this.prop);
}
@Injectable({ providedIn: 'root' })
// import { Injectable } from '@angular/core';
export class UserService {

  private usersUrl = 'users';
  private userUrl = 'user';
  private url = environment.api_url;

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    // private environment: environment
  ) {
    myPrivateFunction.bind(this)();
  }

  /** GET users from the server */
  getUsers (): Observable<User[]> {
    const url = this.url+'/'+this.usersUrl;
    return this.http.get<User[]>(url, httpOptions)
      .pipe(
        tap(users => this.log(`fetched users`)),
        catchError(this.handleError('getUsers', []))
      );
  }

  /** GET user by id. Return `undefined` when id not found */
  getUserNo404<Data>(id: number): Observable<User> {
    const url = `${this.url+'/'+this.usersUrl}/?id=${id}`;
    return this.http.get<User[]>(url)
      .pipe(
        map(users => users[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} user id=${id}`);
        }),
        catchError(this.handleError<User>(`getUser id=${id}`))
      );
  }

  /** GET user by id. Will 404 if id not found */
  getUser(id: string): Observable<User> {
    const url = `${this.url+'/'+this.userUrl}/${id}`;
    return this.http.get<User>(url, httpOptions).pipe(
      tap(_ => this.log(`fetched user id=${id}`)),
      catchError(this.handleError<User>(`getUser id=${id}`))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
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

  /** Log a UserService message with the MessageService */
  private log(message: string) {
    this.messageService.add('UserService: ' + message);
  }

}

