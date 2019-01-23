import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeContComponent } from './components/home-cont/home-cont.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeContComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
