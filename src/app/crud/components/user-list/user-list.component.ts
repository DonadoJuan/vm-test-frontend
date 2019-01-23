import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/core/models/user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  userList$: Observable<User[]>;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.updateUserList();
  }

  deleteUser(id) {
    this.userService.deleteUser(id)
    .subscribe(res =>{
      if(res.code == '00')
        this.updateUserList();
      else
        console.log('error en getUserList');

    });
  }

  updateUser(user: User){
    this.userService.userToUpdate = user;
    this.router.navigateByUrl('crud/user-form');
  }

  updateUserList() {
    this.userList$ = this.userService.getUserList()
    .pipe(
      map(res => {
        if(res.code == '00')
          return res.data;
        else
          console.log('Error en getUserList');
      })
    );
  }

}
