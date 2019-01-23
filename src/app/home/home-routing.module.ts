import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeContComponent } from './components/home-cont/home-cont.component';

const routes: Routes = [
  {
    path: '',
    component: HomeContComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
