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
    allPatientData:any;
    allDoctorData:any;
    addNewPatient:any;
    alertUrl: string;
    queueAlert:any;
    deleteQueueAlert:any;
    constructor() {
        //signup 
        this.signUpUrl = '/Care/signUp';
        //signin
        this.signInUrl = '/Care/signIn';
        //reset password
        this.reset = '/Care/resetPassword';
        //get vital
        this.patientId ='/Care/dbs/PatientVitals/colls/CaliberBBContainer';
        //get patient id
        this.patientInfo = '/Care/dbs/PatientVitals/colls/PatientInfo';
        //get all PatientData
        this.allPatientData = '/Care/getAllPatient';
        //get all DoctorData
        this.allDoctorData = '/Care/getAllDoctor';
        //add new patient
        this.addNewPatient = '/Care/addNewPatient';
        //alert
        this.alertUrl='/Care/dbs/PatientVitals/colls/Alerts';
        //queue alert
        this.queueAlert = '/Care/getQueueAlert';
        //queue alert
        this.deleteQueueAlert = '/Care/deleteQueueAlert';
    }
}
