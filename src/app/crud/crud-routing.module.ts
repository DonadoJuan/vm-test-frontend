import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudContComponent } from './components/crud-cont/crud-cont.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';

const routes: Routes = [
  {
    path: '',
    component: CrudContComponent,
    children: [
      {
        path: 'user-list',
        component: UserListComponent
      },
      {
        path: 'user-form',
        component: UserFormComponent
      },
      { 
        path: '',
        redirectTo: 'user-list',
        pathMatch: 'full'
      },
      { 
        path: '**', 
        redirectTo: 'user-list'
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule { }

