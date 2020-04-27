import { Component, OnInit ,TemplateRef} from '@angular/core';
import { ShareDataService } from '../../CommonServices/share-data.service';
import { faCheckCircle, faHourglassEnd ,faDownload } from '@fortawesome/free-solid-svg-icons';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-appoint-hist',
  templateUrl: './appoint-hist.component.html',
  styleUrls: ['./appoint-hist.component.scss']
})
export class AppointHistComponent implements OnInit {
  patientHisty: any;
  Done = faCheckCircle;
  modalRef: BsModalRef;
  Expired = faHourglassEnd;
  faDownload = faDownload;
  onlyScheduled: any;
  presImg:any;
  history:any;

  constructor(private _shareData: ShareDataService,private modalService: BsModalService) { }

  ngOnInit() {
    
    let getPatientDetails = this._shareData.getPatientData();
    this.patientHisty = getPatientDetails.appointments.filter(x=>{
      return x.Status != 'Scheduled';
    })
  }

   //open modal
   openModal(template: TemplateRef<any>,appID) {
    this.openSelectedSche(appID);
    this.modalRef = this.modalService.show(template,{ class: 'modal-lg' });
  }

   //selected value
   openSelectedSche(value){
    this.onlyScheduled = this.patientHisty.filter(x=>{
      return x.appID == value;
    })
  }



    //get prescription
    download(presUrl){
      let imgURL = "https://caliberbbsa.blob.core.windows.net/prescriptionstore/"+ presUrl + '?sv=2019-02-02&ss=b&srt=sco&sp=rwdlac&se=2020-05-31T11:27:02Z&st=2020-04-24T03:27:02Z&spr=https&sig=gKM6ztleUcZf3bE1iifHg71VmwCaf5%2FIqEyQilo8cNQ%3D';
      this.getBase64ImageFromURL(imgURL).subscribe(base64data => {
        console.log(base64data);
        this.presImg = 'data:image/jpg;base64,' + base64data;
      });
    }

    
  getBase64ImageFromURL(url: string) {
    return Observable.create((observer) => {
      let img = new Image();
      img.crossOrigin = 'Anonymous';
      img.src = url;  img.src = url;
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


}
