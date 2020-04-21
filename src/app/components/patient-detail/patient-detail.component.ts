import { Component, OnInit } from '@angular/core';
import { ShareDataService } from '../../CommonServices/share-data.service';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.scss']
})
export class PatientDetailComponent implements OnInit {

  crtID:number;

  constructor(private _shareData:ShareDataService) { }

  ngOnInit() {
    this.crtID = this._shareData.getPatientId();
    //getIdApiCall
  }




}
