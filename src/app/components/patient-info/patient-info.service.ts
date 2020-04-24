import { Injectable } from '@angular/core';
import { ConfigUrl } from '../../CommonServices/configUrl';
import { HTTPService } from '../../CommonServices/http.service';

@Injectable({
  providedIn: 'root'
})
export class patientInfoService {

  constructor(private ConstURL: ConfigUrl, private httpService: HTTPService) { }

  //getPatientInfo Api
  getPatientInfo(id) {
    let patientUrl = this.ConstURL.patientInfo;
    let data = {
      id:id
    }
    return this.httpService.makeHTTPPOSTRequest(patientUrl,data);
  }
  //https://caliberbbsa.blob.core.windows.net/patientphoto/{filename}?sv=2019-02-02&ss=b&srt=sco&sp=rwdlac&se=2020-05-31T11:27:02Z&st=2020-04-24T03:27:02Z&spr=https&sig=gKM6ztleUcZf3bE1iifHg71VmwCaf5%2FIqEyQilo8cNQ%3D

  //getPatitentPhotoUrl
  getPatitentPhotoUrl(id,path){
    let url = path.split('.net');
    let ProfilePhotoUrl = url[1] + '?sv=2019-02-02&ss=b&srt=sco&sp=rwdlac&se=2020-05-31T11:27:02Z&st=2020-04-24T03:27:02Z&spr=https&sig=gKM6ztleUcZf3bE1iifHg71VmwCaf5%2FIqEyQilo8cNQ%3D';
    return this.httpService.makeHTTPGETRequest(ProfilePhotoUrl);
  }
}