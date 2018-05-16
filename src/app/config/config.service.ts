import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

export interface Config {
  heroesUrl: string;
  textfile: string;
}

/*const httpOptions = {

};

httpOptions.headers =
  httpOptions.headers.set('Authorization', 'my-new-auth-token')*/

@Injectable()
export class ConfigService {

  configUrl = 'assets/config.json';

  headers: object;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-API-VERSION': '1',
      'X-HRC-APP-KEY': 'e34ab8cb0c62481a1a0a0aa63a8fa344',
      'Authorization': '7a67f85b-c59e-40be-91c8-29683047b750'
    });

    var test = this.getConfig();
    console.log("test");
    console.log(test);

    debugger;

  }

  getConfig() {
    // return this.http.get(this.configUrl);

    // now returns an Observable of Config
    return this.http.get<Config>(this.configUrl);
  }

  getHeaders(){


    return this.headers;
  }

  /*getConfigResponse(): Observable<HttpResponse<Config>> {
    return this.http.get<Config>(
      this.configUrl, { observe: 'response' });
  }*/

}
