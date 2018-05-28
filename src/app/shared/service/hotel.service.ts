import { Injectable } from '@angular/core';
import {AuthService} from "../../auth.service";
import {environment} from "../../../environments/environment";
import {Hotel} from "../class/hotel";
import {catchError, tap, map} from "rxjs/operators";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs/index";
import {HttpResponse} from "@angular/common/http/src/response";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'X-API-VERSION': '1',
    'X-HRC-APP-KEY': 'e34ab8cb0c62481a1a0a0aa63a8fa344'
  } ),
  observe: 'response'
};

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  private url_get_hotels:string = 'hotels';
  private url_get_hotel:string = 'hotel';
  private url:string;
  selected_hotel_id:string = '';

  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) {
    this.url = String(environment.api_url);
  }

  private getHeaders(without_authorization?:boolean):HttpHeaders {
    let httpOptions_clone = Object.assign({}, httpOptions);
    if( without_authorization ){
      return httpOptions.headers;
    }
    return httpOptions.headers.set('Authorization', this.authService.getAccessToken());
  }

  getHotels (): Observable<Hotel[]> {
    console.log("HotelService :: getHotels");
    let url = this.url+'/'+this.url_get_hotels+'?available';

    return this.http.get<Hotel[]>(url,  {headers: this.getHeaders()})
      .pipe(
        tap(hotels => {
          console.log('hotels (select) are loaded');
        }),
        catchError(this.handleError('getHotels', []))
      );
  }

  getHotel (hotel_id:string): Observable<Hotel> {
    console.log("HotelService :: getHotels");
    let url = this.url+'/'+this.url_get_hotel+'/'+hotel_id;

    return this.http.get<Hotel>(url,  {headers: this.getHeaders()});
  }

  // : Observable<any>
  getList (first:number, max:number): Observable<HttpResponse<Hotel[]>> {
    console.log("HotelService :: getList");
    // http://128.199.60.22:9090/hotels?available&first=0&max=10&_=1526981192472
    let url = this.url+'/'+this.url_get_hotels+'?available&first='+String(first)+'&max='+String(max);

    return  this.http.get<Hotel[]>(url,{headers: this.getHeaders(), observe: 'response' });

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
