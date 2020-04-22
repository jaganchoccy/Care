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
    debugger
    this._shareData.setPatientId(this.patientID);
    this._patientS.getPatientIdApi(this.patientID).subscribe(res => {
      
      if (res.error) {
        console.log(res, 'err');
        
      } else {
        this._route.navigateByUrl('/patientDetail')
        console.log(res, 'succ');
        
      }
    });
    //this._route.navigateByUrl('/patientDetail')
  }


  ngOnInit() {
  }

}
