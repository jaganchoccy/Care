import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ShareDataService } from '../../CommonServices/share-data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  patientID:any;

  constructor(private _shareData:ShareDataService,private _route:Router) { }

  
  getPatientId(id){
    this._shareData.setPatientId(id);
    this._route.navigateByUrl('/patientDetail')
  }


  ngOnInit() {
  }

}
