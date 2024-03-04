import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WclService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  test(): void {
  }

  oauthToken(): void {
    const url = 'https://www.warcraftlogs.com/oauth/token';
    this.httpClient.post(url, {
      auth: {
      }
    }, {
      params: {
        grant_type: 'client_credentials',
      }
    }).subscribe((data) => {
      console.log(data);
    })
  }
}
