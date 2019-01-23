import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuoteService } from 'src/app/core/services/quote.service';
import { Subscription, zip } from 'rxjs';
import { APIResponse } from '../../../core/models/response';
import { Quote } from '../../../core/models/quote';

@Component({
  selector: 'app-quote-cont',
  templateUrl: './quote-cont.component.html',
  styleUrls: ['./quote-cont.component.scss']
})
export class QuoteContComponent implements OnInit, OnDestroy {

  dolarQuoteList: Quote[] = [];
  realQuoteList: Quote[] = [];
  pesosQuoteList: Quote[] = [];
  quoteDolarSubs: Subscription;
  quoteRealSubs: Subscription;
  quotePesosSubs: Subscription;

  constructor(private quoteService: QuoteService) { }

  ngOnInit() {
    this.getQuotes();
  }

  ngOnDestroy() {
    this.quoteDolarSubs.unsubscribe();
    this.quoteRealSubs.unsubscribe();
    this.quotePesosSubs.unsubscribe();
  }

  getQuotes() {
    
    this.dolarQuoteList = this.quoteService.getStoredQuotes('dolarQuoteList');
    this.pesosQuoteList = this.quoteService.getStoredQuotes('pesosQuoteList');
    this.realQuoteList = this.quoteService.getStoredQuotes('realQuoteList');

    this.quoteDolarSubs = this.quoteService.getDolarQuote()
    .subscribe(this.handleQuoteRes(this.dolarQuoteList, 'dolarQuoteList'));
    this.quotePesosSubs = this.quoteService.getPesosQuote()
    .subscribe(this.handleQuoteRes(this.pesosQuoteList, 'pesosQuoteList'));
    this.quoteRealSubs = this.quoteService.getRealQuote()
    .subscribe(this.handleQuoteRes(this.realQuoteList, 'realQuoteList'));
  }

  handleQuoteRes(quoteList: Quote[], quoteListName: string) {
    return (res) => {
      if(res.code == '00') {
        quoteList.push(res.data);
        localStorage.setItem(quoteListName, JSON.stringify(quoteList));
      }else {
        quoteList.push(null);
      }
    }
  }

}

