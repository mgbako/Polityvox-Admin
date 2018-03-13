import { Injectable } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

@Injectable()
export class AuthService {
  loggedIn = false;

  constructor(private http: HttpService){
  }

  isAuthenticated() {
    return JSON.parse(localStorage.getItem('user'));
  }

  register(data){
    return this.http.post('merchants', data).pipe(
      map(res => res),
      catchError(this.handlerError)
    );
  }

  login(data) {
    return this.http.post('merchants/login', data).pipe(
      map(res => {
        this.loggedIn = true;
        return res;
      }),
      catchError(this.handlerError)
    );
  }

  setUser(data) {
    localStorage.setItem('user', JSON.stringify(data));
  }

  user() {
    const data = JSON.parse(localStorage.getItem('user'));
    return new Promise((resolve, reject) => {
      if (data) {
        resolve(data);
      } else {
        reject();
      }
    });
  }

  logout() {
    localStorage.removeItem('user');
  }

  private handlerError(error: HttpErrorResponse) {
    const errors = {
      status: error.status,
      message: error.error
    };

    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred', error.error.message);
    } else {
      console.error(`Backend returned code $(error.status)`);
      return new ErrorObservable(errors);
    }

    return new ErrorObservable(errors);
  }
}