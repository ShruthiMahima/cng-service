import { Injectable } from '@angular/core';

@Injectable()

export class AppConfig {



  private _config: { [key: string]: string };

  constructor() {

    this._config = {
      REST_ENDPOINT: "https://localhost:44353/api",
      //REST_ENDPOINT: "https://certificatenumbergenerator20200312063646.azurewebsites.net/api",
      PATH_SEPARATOR: "/",
    };

  }

  get setting(): { [key: string]: string } {

    return this._config;

  }

  get(key: any) {

    return this._config[key];

  }

};
