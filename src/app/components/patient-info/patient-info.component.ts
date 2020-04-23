import { Component, OnInit } from '@angular/core';
import { patientInfoService } from './patient-info.service';
@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.scss']
})
export class PatientInfoComponent implements OnInit {

  constructor(private patientInfoS: patientInfoService) { }
  items =  [
    {
        "AppointmentDate": "01/01/2020",
        "Status": "Done",
        "PrescriptionId": 1,
        "DoctorName": "XYZ",
        "DoctorId": 1
    },
    {
        "AppointmentDate": "01/02/2020",
        "Status": "Done",
        "PrescriptionId": 2,
        "DoctorName": "XYZ",
        "DoctorId": 1
    },
    {
        "AppointmentDate": "01/03/2020",
        "Status": "Expired",
        "PrescriptionId": null,
        "DoctorName": "ABC",
        "DoctorId": 2
    },
    {
        "AppointmentDate": "05/06/1900",
        "Status": "Scheduled",
        "PrescriptionId": null,
        "DoctorName": "ABC",
        "DoctorId": 2
    }
];
  term: string;
  ngOnInit() {
    this.PatientInfo()
  }

  //submit login form
  PatientInfo() {

    this.patientInfoS.getPatientInfo().subscribe(res => {
      if (res.error) {
        console.log(res, 'err');
      } else {
        console.log(res, 'succ');
      }
    });
  }
}
