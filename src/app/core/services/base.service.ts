import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ENV } from '../config';
import { APIResponse } from '../models/response';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private http: HttpClient ) {
  }

  get(route: string): Observable<any> {
    return this.http.get(ENV.BASE_API + route).pipe(
      catchError(err => this.handleError(err))
    );
  }

  post(route: string, data: object): Observable<any> {
      return this.http.post(ENV.BASE_API + route, data).pipe(
        catchError(err => this.handleError(err))
      );
  }

  delete(route: string): Observable<any> {
    return this.http.delete(ENV.BASE_API + route).pipe(
      catchError(err => this.handleError(err))
    );
  }

  put(route: string, data: object): Observable<any> {
    return this.http.put(ENV.BASE_API + route, data).pipe(
      catchError(err => this.handleError(err))
    );
  }

  handleError(error): Observable<any> {
    return of({message:'unexpected error', code: error.status});
  }

}
