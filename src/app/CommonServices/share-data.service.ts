import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  patientId:any;
  patientInfo: any;
  scheduleId:any;
  patientData: any;
  doctorData: any;

  constructor() { }

  setPatientId(id:any){
    this.patientId = id;
  }

  getPatientId(){
    return this.patientId;
  }

  setPatientInfo(data:any){
    this.patientInfo = data;
  }

  getPatientInfo(){
    return this.patientInfo;
  }

  setSchedule(val:any){
    this.scheduleId = val;
  }

  getSchedule(){
    return this.scheduleId;
  }
  setPatientData(data:any){
    this.patientData = data;
  }
  
  getPatientData(){
    return this.patientData;
  }

  setDoctorData(data:any){
    this.doctorData = data;
  }

  getDoctorData(){
    return this.doctorData;
  }

}
