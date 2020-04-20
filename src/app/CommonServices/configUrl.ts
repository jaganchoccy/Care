import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ConfigUrl {

    signUpUrl: any;
    signInUrl: any;
    reset: any;

    constructor() {
        //signup 
        this.signUpUrl = '/Auth/signUp';
        //signin
        this.signInUrl = '/Auth/signIn';
        //reset password
        this.reset = '/Auth/resetPassword';
    }
}
