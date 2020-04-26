import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareDataService } from '../../CommonServices/share-data.service';
import { MainService } from './main.service';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  patientID: any;
  faUserPlus = faPlus;
  viewAllPatient: any;
  loader: boolean;
  viewAllDoctor: any;
  loaderDoctor: boolean;

  constructor(private _shareData: ShareDataService, private _route: Router, private _patientS: MainService) { }


  getPatientId() {
    debugger
    this._shareData.setPatientId(this.patientID);
    if (this.patientID == undefined) {
      this._route.navigateByUrl('/Search')
    }
    this._route.navigateByUrl('/patientDetail')
  }


  ngOnInit() {
    this.getAllPatientApi();
    this.getAllDoctorApi();
  }

  //get all patient details
  getAllPatientApi(){
    this.loader = true;
    this._patientS.getAllPatientData().subscribe(res => {
      this.loader = false;
      this.viewAllPatient = res.Data;
      this._shareData.setPatientData(this.viewAllPatient)
    });
  }

  //get all doctor details
  getAllDoctorApi(){
    this.loaderDoctor = true;
    this._patientS.getAllDoctorData().subscribe(res => {
      debugger
      this.loaderDoctor = false;
      this.viewAllDoctor = res.Data;
      this._shareData.setDoctorData(this.viewAllDoctor)
    });
  }

}
