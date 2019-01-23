import { AbstractControl } from '@angular/forms';

const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const matchPasswords = (form: AbstractControl) => {

    if(form.get('password').value != form.get('confirm_password').value)
        return { matchPasswords: true };
    else
        return null;
}

export const emailFormat = (control: AbstractControl) => {
    
    if(!regexEmail.test(control.value))
        return { emailFormat: true };
    else
        return null;
    
}
