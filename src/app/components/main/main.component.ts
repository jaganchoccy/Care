import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ShareDataService } from '../../CommonServices/share-data.service';
import {MainService} from './main.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  patientID:any;

  constructor(private _shareData:ShareDataService,private _route:Router,private _patientS:MainService) { }

  
  getPatientId(){
  
    this._shareData.setPatientId(this.patientID);
    if(this.patientID == undefined){
      this._route.navigateByUrl('/Search')
    }
    this._route.navigateByUrl('/patientDetail')
  }


  ngOnInit() {
  }

}
