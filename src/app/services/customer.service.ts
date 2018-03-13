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
      catchError(this.handlerError)
    );
  }

  awardPoint(data) {
    return this.http.post('customers/awardpoint', data).pipe(
      map(res => res),
      catchError(this.handlerError)
    );
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
