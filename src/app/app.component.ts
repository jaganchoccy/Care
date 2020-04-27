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
  alertRecord: any;
  showAlert: boolean;
  noData: boolean = false;
  vital: boolean = true;
  constructor(private _router: Router, private toastr: ToastrService, private _appS: AppService) {

  }

  ngOnInit() {
    this.getAlertMsg();
    this.timer();
  }


  timer() {
    this.interval = setInterval(() => {
      this.getAlertMsg();
    }, 30000)
  }


  getAlertMsg() {
    this.showAlert = false;
    this._appS.getAlertMsg().subscribe(res => {
      this.showAlert = true;
      this.toast(res)
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
      if (res.data.body == '') {
        this.noData = true;
        this.vital = false;
      } else {
        this.noData = false;
        this.vital = true;
        this.toast(res)
      }
    })
  }

  toast(res) {
    debugger
    if(res.data.length == 0 ){
      this.noData = true;
      this.vital = false;
    }else{
      this.noData = false;
      this.vital = true;
      let x = JSON.parse(JSON.stringify(res.data))
    let encodeMsg = this.decodeUnicode(x[0].messageText)
    let result = JSON.parse(encodeMsg);
    
    this.alertRecord = result;
    }
    
  }


  closeAlert() {
    this.showAlert = false;
    this.nextMsg();
  }

}
