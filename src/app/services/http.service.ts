import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HttpService {
  private dynamicUrl = 'b51ea4e3';
  private baseUrl = `https://mtn-loyalty.herokuapp.com/api/v1/`;

  constructor(public http: HttpClient) { }

  get(url) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.get(this.baseUrl + url);
  }

  post(url: string, data) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.baseUrl + url, data, {headers: headers});
  }
}
