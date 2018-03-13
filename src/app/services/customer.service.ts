import { Injectable } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

@Injectable()
export class CustomerService {

  constructor(private http: HttpService) {

  }

  verifyToke(token) {
    return this.http.get('tokens/' + token).pipe(
      map(res => res),
      catchError(error => error)
    );
  }

}
