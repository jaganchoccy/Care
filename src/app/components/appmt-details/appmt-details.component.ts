import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ShareDataService } from '../../CommonServices/share-data.service';

@Component({
  selector: 'app-appmt-details',
  templateUrl: './appmt-details.component.html',
  styleUrls: ['./appmt-details.component.scss']
})
export class AppmtDetailsComponent implements OnInit {
  appmtSchdId: any;
  patientDetails: any;
  appmtRecord: any;

  constructor(private _shareData: ShareDataService,private _route:Router) { }

  ngOnInit() {
    this.appmtSchdId = this._shareData.getSchedule();
    debugger
    if(this.appmtSchdId != undefined || this.appmtSchdId != ''){
      this.loadScheduleRecord();
    }else{
      
      this._route.navigateByUrl('/patientDetail');
    }
    
  }


  loadScheduleRecord(){
    debugger
    this.patientDetails =this._shareData.getPatientData();
    this.appmtRecord = []
  
    this.patientDetails.appointments.forEach(item => {
      if(item.appID == this.appmtSchdId){
        this.appmtRecord.push(item)
      }
    });
    debugger
    console.log(this.appmtRecord)
  }

}
