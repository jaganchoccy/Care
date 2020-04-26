import { Component, OnInit } from '@angular/core';
import {notificationService} from './notification.service';
import { ShareDataService } from '../../CommonServices/share-data.service';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  notificationData: any;
  notification:any;
  faEye=faEye;
  loader: boolean;

  constructor(private _notifyS:notificationService,private _shareS:ShareDataService,private _route:Router) { }

  ngOnInit() {
    this.allAlert();
  }

  allAlert(){
    this.loader = true;
    this._notifyS.getNotificationData().subscribe(res=>{
      this.loader = false
      var data =JSON.parse(res.Data.body);
      this.notificationData = data.Documents;
    })
  }

  timeFormat(val){
    //2020-04-25T06:51:11.7974070Z
    let data = val.split('T');
    let date = data[0];
    let time = data[1].slice(0,8);
    return date + '  /  ' + time;
  }


  viewPatient(id){
    this._shareS.setPatientId(id);
    this._route.navigateByUrl('/patientDetail')
  }
  
}
