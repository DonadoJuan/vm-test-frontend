import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { APIResponse } from '../models/response';
import { User } from '../models/user';
import { Observable, BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userToUpdate: User;

  constructor(private baseService: BaseService) { }

  getUserList(): Observable<APIResponse<User[]>>{
    return this.baseService.get('usuarios');
  }

  addUser(user: User): Observable<APIResponse<User>>{
    return this.baseService.post('usuarios', user);
  }

  updateUser(user: User): Observable<APIResponse<User>>{
    return this.baseService.put('usuarios', user);
  }

  deleteUser(id: string): Observable<APIResponse<User>>{
    return this.baseService.delete(`usuarios/${id}`);
  }

}
