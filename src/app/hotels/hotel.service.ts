import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Hotel } from './hotel';
import { MessageService } from '../message.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'X-API-VERSION': '1',
    'X-HRC-APP-KEY': 'e34ab8cb0c62481a1a0a0aa63a8fa344',
    'Authorization': '3f9b8614-ca3f-4a6c-81be-0c783c285dda'
  })
};

@Injectable({ providedIn: 'root' })
export class HotelService {


  private hotelsUrl = 'http://128.199.60.22:9090/hotels';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  /** GET hotels from the server */
  getHotels (): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.hotelsUrl, httpOptions)
      .pipe(
        tap(hotels => this.log(`fetched hotels`)),
        catchError(this.handleError('getHotels', []))
      );
  }

  /** GET hotel by id. Return `undefined` when id not found */
  getHotelNo404<Data>(id: number): Observable<Hotel> {
    const url = `${this.hotelsUrl}/?id=${id}`;
    return this.http.get<Hotel[]>(url)
      .pipe(
        map(hotels => hotels[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} hotel id=${id}`);
        }),
        catchError(this.handleError<Hotel>(`getHotel id=${id}`))
      );
  }

  /** GET hotel by id. Will 404 if id not found */
  getHotel(id: number): Observable<Hotel> {
    const url = `${this.hotelsUrl}/${id}`;
    return this.http.get<Hotel>(url, httpOptions).pipe(
      tap(_ => this.log(`fetched hotel id=${id}`)),
      catchError(this.handleError<Hotel>(`getHotel id=${id}`))
    );
  }

  /* GET hotels whose name contains search term */
  /*searchHotels(term: string): Observable<Hotel[]> {
    if (!term.trim()) {
      // if not search term, return empty hotel array.
      return of([]);
    }
    return this.http.get<Hotel[]>(`api/hotels/?name=${term}`).pipe(
      tap(_ => this.log(`found hotels matching "${term}"`)),
      catchError(this.handleError<Hotel[]>('searchHotels', []))
    );
  }*/

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
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HotelService message with the MessageService */
  private log(message: string) {
    this.messageService.add('HotelService: ' + message);
  }

}
