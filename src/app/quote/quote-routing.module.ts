import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuoteContComponent } from './components/quote-cont/quote-cont.component';

const routes: Routes = [
  {
    path: '',
    component: QuoteContComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuoteRoutingModule { }
