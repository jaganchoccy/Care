import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './app-service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  queueMsg: any;
  interval: any;
  constructor(private _router: Router, private toastr: ToastrService, private _appS: AppService) {

  }

  ngOnInit() {
    this.getAlertMsg();
    this.timer();
    this.nextMsg();
  }


  timer() {
    this.interval = setInterval(() => {


    }, 30000)
  }


  getAlertMsg() {
    this._appS.getAlertMsg().subscribe(res => {
      debugger
      let x = JSON.parse(JSON.stringify(res.data))
      let encodeMsg = this.decodeUnicode(x[0].messageText)
      let result = JSON.parse(encodeMsg);
      var heart = result.heartrate.toFixed(2);
      var temp = result.temperature.toFixed(2);
      this.toastr.error(
        "<div><b>Heart Rate : </b>" + heart + '</div>\n<div> <b>Body Temperature : </b>' + temp + '</div>\n <div><b>Patient ID: </b>' + result.patientid + '</div>');
    })
  }

  decodeUnicode(str) {
    // Going backwards: from bytestream, to percent-encoding, to original string.
    return decodeURIComponent(atob(str).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  }


  //call deleted API
  nextMsg() {
    debugger
    this._appS.deleteAlertMsg().subscribe(res => {
debugger
    })
  }
}
