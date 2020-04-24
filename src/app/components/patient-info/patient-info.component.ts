import { Component, OnInit } from '@angular/core';
import { patientInfoService } from './patient-info.service';
import { ShareDataService } from '../../CommonServices/share-data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.scss']
})
export class PatientInfoComponent implements OnInit {
  patientInfo: any;
  contact: any;
  em: any;
  patientSchedule: any;
  patientExp: any;
  status: any[] = [];
  imageUrl: any;
  loader: boolean;

  constructor(private _shareData: ShareDataService,private _route:Router, private patientInfoS: patientInfoService) { }
  patientItems: any;
  history: any;
  schedule:any;
  ngOnInit() {
    let id = this._shareData.getPatientId();
    if(id == undefined || id == ''){
      this._route.navigateByUrl('/Search');
    }
    this.PatientInfo(id)
  }

  //submit login form
  PatientInfo(id) {
    this.loader = true;
    this.patientInfoS.getPatientInfo(id).subscribe(res => {
      this.loader = false;
      if (res.error) {
        console.log(res, 'err');
      } else {
        debugger
          this.patientInfo = res.Data.body.Documents[0];
          this._shareData.setPatientInfo(this.patientInfo);
          if(this.patientInfo != undefined || this.patientInfo != []){
            this.contact = this.patientInfo["contact no"];
            this.em = this.patientInfo["emergency contact no"];
            this.patientItems = res.Data.body.Documents[0].appointments;
            if(this.patientInfo.photourl != '' || this.patientInfo.photourl != null || this.patientInfo.photourl || undefined){
              this.getPhotoUrl(id,this.patientInfo.photourl)
            }
            this.patientSchedule = this.patientItems.filter(x => {
             return  x.Status == 'Scheduled'
            })
            //add index value for get schedule in report tab
            this.patientItems.forEach((element,index) => {
              element["appID"] = index; 
            });
            this._shareData.setPatientData(this.patientInfo);
            this.patientExp = this.patientItems.filter(x => {
              return x.Status != 'Scheduled'
            })
          }
      }
    });
  }


  //get photo url
  getPhotoUrl(id,photoUrl){
    debugger
    this.patientInfoS.getPatitentPhotoUrl(id,photoUrl).subscribe(res => {
      debugger
      if (res.error) {
        console.log(res, 'err');
      } else {
        console.log(res,'ress')
      }
    });
  }


  //get selected schedule details
  selectedView(val){
    this._shareData.setSchedule(val);
    //this._route.navigateByUrl('/')
  }  
}
