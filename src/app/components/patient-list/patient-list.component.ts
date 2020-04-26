import { Component, OnInit } from '@angular/core';
import { ShareDataService} from '../../CommonServices/share-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {
  allPatient: any;
  searchPatient:any;
  constructor(private _shareData: ShareDataService,private _route:Router) { }

  ngOnInit() {
    this.allPatient = this._shareData.getPatientData()
    if(this.allPatient == undefined){
      this._route.navigateByUrl('/Search')
    }
  }

}
