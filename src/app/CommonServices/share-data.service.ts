import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  patientId:any;

  constructor() { }

  setPatientId(id:any){
    this.patientId = id;
  }

  getPatientId(){
    return this.patientId;
  }

}
