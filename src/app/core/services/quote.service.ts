import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable, timer, Subject } from 'rxjs';
import { switchMap, takeUntil, map } from 'rxjs/operators';
import { APIResponse } from '../models/response';
import { Quote } from '../models/quote';
import { CONFIG_VARS } from '../config';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  refreshTime: number = CONFIG_VARS.QUOTE_REFRESH_TIME_IN_SECONDS * 1000;

  constructor(private baseService: BaseService) { }

  getStoredQuotes(key: string){
    let quoteList = [];
    let data = JSON.parse(localStorage.getItem(key));
    if(data!= null)
    quoteList = data;

    return quoteList;
  }

  getDolarQuote(): Observable<APIResponse<Quote>> {
    return this.getQuote('dolar/quote');
  }

  getPesosQuote():  Observable<APIResponse<Quote>> {
    return this.getQuote('pesos/quote');
  }

  getRealQuote():  Observable<APIResponse<Quote>> {
    return this.getQuote('real/quote');
  }

  getQuote(currencyType: string): Observable<APIResponse<Quote>> {
    let stopTimer = new Subject();
    return timer(0, this.refreshTime).pipe(
      takeUntil(stopTimer),
      switchMap( () => this.baseService.get(currencyType)),
      map(res =>{

        if(res.code != '00')
          stopTimer.next();
      
        return res;
      })
    );
  }
}
