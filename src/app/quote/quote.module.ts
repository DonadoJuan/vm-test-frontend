import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteContComponent } from './components/quote-cont/quote-cont.component';
import { QuoteRoutingModule } from './quote-routing.module';
import { QuoteCardComponent } from './components/quote-card/quote-card.component';
import { TimeAgoPipe } from './pipes/time-ago.pipe';

@NgModule({
  declarations: [QuoteContComponent, QuoteCardComponent, TimeAgoPipe],
  imports: [
    CommonModule,
    QuoteRoutingModule
  ]
})
export class QuoteModule { }
