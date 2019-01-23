import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'quote-card',
  templateUrl: './quote-card.component.html',
  styleUrls: ['./quote-card.component.scss'],
  animations: [
    trigger('enterLeave', [
      transition('void => *', [
         style({ opacity: 0}),   
         animate('800ms ease-out',
          style({ opacity: 1}),     
         )
      ])
   ])
  ]
})
export class QuoteCardComponent implements OnInit {

  @Input()
  quote: any;
  
  constructor() { } 

  ngOnInit() {
  }

}
