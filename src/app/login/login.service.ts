import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

// import { User } from '../users/user.service';

export class Login {
  login: string;
  password: string;
}

export class authResponce {
  accessToken: string;
  userID: string;
}




// "name":[
// {"whenCreated":1525324627524,"whenUpdated":1525324627524,"id":"3ed0a590-29ca-44cc-ab00-94b1759909eb","language":"ru","value":"Отель АртиЛенд"},
// {"whenCreated":1525324627525,"whenUpdated":1525324627525,"id":"b395fc08-c5e2-44d6-a848-a809a514b5e5","language":"en","value":"Artiland"}],
// "settings":[],"rooms":[],"extra":"READY"}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { MessageService } from '../message.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'X-API-VERSION': '1',
    'X-HRC-APP-KEY': 'e34ab8cb0c62481a1a0a0aa63a8fa344',
    // 'Authorization': '7a67f85b-c59e-40be-91c8-29683047b750'
  })
};

@Injectable({ providedIn: 'root' })
export class LoginService {

  private url_signin:string = 'signin';
  private url:string;

  public user$: object;

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
  ) {
    this.url = String(environment.api_url);
    /*this.httpOptions = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-API-VERSION': String(environment.x_api_version),
      'X-HRC-APP-KEY': String(environment.x_hrc_app_key)
    });*/
  }


  postSignIn(login: Login): Observable<authResponce> {
    let url = this.url+'/'+this.url_signin;
    return this.http.post<authResponce>(url, login, httpOptions).pipe(
      tap((user: authResponce) => this.log(`added hotel w/ id=${user.userID}`)),
      catchError(this.handleError<authResponce>('postSignIn'))
    );

  }

  setUser(){

  }



  //////// Save methods //////////

  /** POST: add a new hotel to the server */
  /*addHotel (hotel: Hotel): Observable<Hotel> {
    return this.http.post<Hotel>(this.hotelsUrl, hotel, httpOptions).pipe(
      tap((hotel: Hotel) => this.log(`added hotel w/ id=${hotel.id}`)),
      catchError(this.handleError<Hotel>('addHotel'))
    );
  }*/

  /** DELETE: delete the hotel from the server */
  /*deleteHotel (hotel: Hotel | number): Observable<Hotel> {
    const id = typeof hotel === 'number' ? hotel : hotel.id;
    const url = `${this.hotelsUrl}/${id}`;

    return this.http.delete<Hotel>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted hotel id=${id}`)),
      catchError(this.handleError<Hotel>('deleteHotel'))
    );
  }*/

  /** PUT: update the hotel on the server */
  /*updateHotel (hotel: Hotel): Observable<any> {
    return this.http.put(this.hotelsUrl, hotel, httpOptions).pipe(
      tap(_ => this.log(`updated hotel id=${hotel.id}`)),
      catchError(this.handleError<any>('updateHotel'))
    );
  }*/

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
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

  /** Log a HotelService message with the MessageService */
  private log(message: string) {
    this.messageService.add('LoginService: ' + message);
  }

}
