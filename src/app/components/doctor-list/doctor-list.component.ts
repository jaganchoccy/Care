import { Component, OnInit } from '@angular/core';
import { ShareDataService } from '../../CommonServices/share-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss']
})
export class DoctorListComponent implements OnInit {
  allDoctor: any;
  searchDoctor: any;
  constructor(private _shareData: ShareDataService, private _route: Router) { }

  ngOnInit() {
    this.allDoctor = this._shareData.getDoctorData()
    if (this.allDoctor == undefined) {
      this._route.navigateByUrl('/Search')
    }
  }


}
