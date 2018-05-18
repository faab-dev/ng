import { Injectable } from '@angular/core';
import {AuthService} from "../auth.service";
import {environment} from "../../environments/environment";
import {Hotel} from "../models/Hotel";
import {catchError, tap} from "rxjs/operators";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs/index";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'X-API-VERSION': '1',
    'X-HRC-APP-KEY': 'e34ab8cb0c62481a1a0a0aa63a8fa344',
  })
};

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  private url_get_hotels:string = 'hotels';
  private url:string;
  selected_hotel_id:string = '';

  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) {
    this.url = String(environment.api_url);
  }

  getHotels (): Observable<Hotel[]> {
    let url = this.url+'/'+this.url_get_hotels+'?available',
      httpOptions_access = httpOptions;
    httpOptions_access.headers = httpOptions_access.headers.set('Authorization', this.authService.getAccessToken());
    return this.http.get<Hotel[]>(url, httpOptions)
      .pipe(
        tap(hotels => {
          console.log('hotels are loaded');
        }),
        catchError(this.handleError('getHotels', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.log(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
