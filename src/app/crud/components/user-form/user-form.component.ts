import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { matchPasswords, emailFormat } from 'src/app/core/custom-validators';
import { UserService } from 'src/app/core/services/user.service';
import { Router, Route } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit, OnDestroy {

  userForm: FormGroup;
  userToUpdate: User;

  get first_name(){
    return this.userForm.get('first_name');
  }

  get last_name(){
    return this.userForm.get('last_name');
  }

  get email(){
    return this.userForm.get('email');
  }

  get password(){
    return this.userForm.get('password');
  }

  get confirm_password(){
    return this.userForm.get('confirm_password');
  }

  constructor(
    private fb: FormBuilder, 
    private userService: UserService, 
    private router: Router
  ) {}

  ngOnInit() {
    this.userToUpdate = this.userService.userToUpdate;
    if(this.userToUpdate)
      this.initUserForm(this.userToUpdate);
    else
      this.initUserForm();
  }

  ngOnDestroy() {
    this.userService.userToUpdate = null;
  }

  initUserForm(userToUpdate?: User) {
    
    let userData = userToUpdate ? userToUpdate : {} as User;

    this.userForm = this.fb.group({
      first_name: [userData.first_name, Validators.required],
      last_name: [userData.last_name, Validators.required],
      email: [userData.email, [Validators.required, emailFormat]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirm_password: ['', Validators.required],
    }, { validator: matchPasswords });
  }


  onSubmitUser() {
    if(this.userForm.invalid)
      return;
    
    const formUser = this.userForm.value;
    let service;

    if(this.userToUpdate){
      formUser._id = this.userToUpdate._id;
      service =  this.userService.updateUser(formUser);
    }else{
      service =  this.userService.addUser(formUser);
    }

    service.subscribe(res => {
      if(res.code == '00')
        this.router.navigateByUrl('crud/user-list');
      else
        console.log('error', res);
    });
  }

}
