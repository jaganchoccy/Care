import { Component, OnInit, TemplateRef } from '@angular/core';
import { patientInfoService } from './patient-info.service';
import { ShareDataService } from '../../CommonServices/share-data.service';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { faCalendarAlt, faDownload } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.scss']
})
export class PatientInfoComponent implements OnInit {
  patientInfo: any;
  patientSchedule: any;
  patientExp: any;
  status: any[] = [];
  faDownload = faDownload
  imageUrl: any;
  modalRef: BsModalRef;
  loader: boolean;
  userImg: any;
  faCalendar = faCalendarAlt;
  onlyScheduled: any;

  constructor(private modalService: BsModalService, private _shareData: ShareDataService, private _route: Router, private patientInfoS: patientInfoService) { }
  patientItems: any;
  history: any;
  schedule: any;
  ngOnInit() {
    let id = this._shareData.getPatientId();
    if (id == undefined || id == '') {
      this._route.navigateByUrl('/Search');
    }
    this.PatientInfo(id)
  }

  //submit login form
  PatientInfo(id) {
    this.loader = true;
    this.patientInfoS.getPatientInfo(id).subscribe(res => {
      this.loader = false;
      if (res.error) {
        console.log(res, 'err');
      } else {
        debugger
        this.patientInfo = res.Data.body.Documents[0];
        this._shareData.setPatientInfo(this.patientInfo);
        if (this.patientInfo != undefined || this.patientInfo != []) {
          this.patientItems = res.Data.body.Documents[0].appointments;
          debugger
          if (this.patientInfo.photourl != '' || this.patientInfo.photourl != null || this.patientInfo.photourl || undefined) {
            this.getPhotoUrl(id, this.patientInfo.photourl)
          } else {
            this.userImg = "../../../assets/images/user.png";
          }
          this.patientSchedule = this.patientItems.filter(x => {
            return x.Status == 'Scheduled'
          })
          //add index value for get schedule in report tab
          this.patientItems.forEach((element, index) => {
            element["appID"] = index;
          });
          this._shareData.setPatientData(this.patientInfo);
          this.patientExp = this.patientItems.filter(x => {
            return x.Status != 'Scheduled'
          })
        }
      }
    });
  }

  //open modal
  openModal(template: TemplateRef<any>, appID) {
    this.openSelectedSche(appID);
    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
  }

  //selected value
  openSelectedSche(value) {
    this.onlyScheduled = this.patientItems.filter(x => {
      return x.appID == value;
    })
  }

  //get photo url
  getPhotoUrl(id, photoUrl) {
    let imgURL = "https://caliberbbsa.blob.core.windows.net/patientphoto/" + photoUrl + '?sv=2019-02-02&ss=b&srt=sco&sp=rwdlac&se=2020-05-31T11:27:02Z&st=2020-04-24T03:27:02Z&spr=https&sig=gKM6ztleUcZf3bE1iifHg71VmwCaf5%2FIqEyQilo8cNQ%3D';
    this.getBase64ImageFromURL(imgURL).subscribe(base64data => {
      console.log(base64data);
      this.userImg = 'data:image/jpg;base64,' + base64data;
    });
  }

  getBase64ImageFromURL(url: string) {
    return Observable.create((observer) => {
      let img = new Image();
      img.crossOrigin = 'Anonymous';
      img.src = url; img.src = url;
      if (!img.complete) {
        img.onload = () => {
          observer.next(this.getBase64Image(img));
          observer.complete();
        };
        img.onerror = (err) => {
          observer.error(err);
        };
      } else {
        observer.next(this.getBase64Image(img));
        observer.complete();
      }
    });
  }

  getBase64Image(img: HTMLImageElement) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL("image/png");
    console.log(dataURL);
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  }


  //get selected schedule details
  selectedView(val) {
    this._shareData.setSchedule(val);
    //this._route.navigateByUrl('/')
  }
}
