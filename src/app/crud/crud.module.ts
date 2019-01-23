import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudContComponent } from './components/crud-cont/crud-cont.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { CrudRoutingModule } from './crud-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CrudContComponent, UserListComponent, UserFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CrudRoutingModule,
    
  ]
})
export class CrudModule { }
