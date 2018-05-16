import { Component, OnInit } from '@angular/core';

import { Config, ConfigService } from './config.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  config: Config;
  headers;

  constructor(
    private configService: ConfigService
  ) { }

  ngOnInit() {
  }

  showConfig() {
    /*this.configService.getConfig()
      .subscribe((data: Config) => this.config = {
        heroesUrl: data['heroesUrl'],
        textfile:  data['textfile']
      });*/
    this.configService.getConfig()
    // clone the data object, using its known Config shape
      .subscribe((data: Config) => this.config = {
        heroesUrl: data['heroesUrl'],
        textfile:  data['textfile']
      });
  }

  /*showConfigResponse() {
    this.configService.getConfigResponse()
    // resp is of type `HttpResponse<Config>`
      .subscribe(resp => {
        // display its headers
        const keys = resp.headers.keys();
        this.headers = keys.map(key =>
          `${key}: ${resp.headers.get(key)}`);

        // access the body directly, which is typed as `Config`.
        this.config = {
          heroesUrl: resp.body['heroesUrl'],
          textfile:  resp.body['textfile']
        };
      });
  }*/

}
