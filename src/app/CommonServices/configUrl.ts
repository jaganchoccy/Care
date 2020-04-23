import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ConfigUrl {

    signUpUrl: any;
    signInUrl: any;
    reset: any;
    patientInfo: any;
    patientId:any;

    constructor() {
        //signup 
        this.signUpUrl = '/Care/signUp';
        //signin
        this.signInUrl = '/Care/signIn';
        //reset password
        this.reset = '/Care/resetPassword';
        //get patient
        this.patientId ='/Care/dbs/PatientVitals/colls/CaliberBBContainer';
        //get patient Info
        this.patientInfo = '/Care/dbs/PatientVitals/colls/PatientInfo';
    }
}
