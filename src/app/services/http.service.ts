import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HttpService {
  private baseUrl = `https://vox-backend.herokuapp.com/`;
  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(public http: HttpClient) { }

  get(url, token = null) {
    if (token !== null) {
      this.headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token
      });
    }
    return this.http.get(this.baseUrl + url, {headers: this.headers});
  }

  post(url: string, data, token = null) {
    if (token !== null) {
      this.headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token
      });
    }
    return this.http.post(this.baseUrl + url, data, {headers: this.headers});
  }
}
