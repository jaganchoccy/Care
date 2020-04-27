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
}