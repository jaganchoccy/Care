import { Component, OnInit } from '@angular/core';
import { ShareDataService } from '../../CommonServices/share-data.service';
import {faDownload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  patientInfo: any;
  faDownload=faDownload;
  reportData: any;
  term:any;
  currentDate = new Date();

  constructor(private _shareData: ShareDataService) { }

  ngOnInit() {
    this.patientInfo = this._shareData.getPatientInfo();
    this.generateReport(this.patientInfo);
  }

  generateReport(data){
    
    this.reportData = data.reports;
  }

   ///inprogress
   alertInprogress(){
    alert('Add report is Under Construction')
  }

}
