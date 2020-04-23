import { Injectable } from '@angular/core';
import { ConfigUrl } from '../../CommonServices/configUrl';
import { HTTPService } from '../../CommonServices/http.service';

@Injectable({
  providedIn: 'root'
})
export class patientInfoService {

  constructor(private ConstURL: ConfigUrl, private httpService: HTTPService) { }

  //getPatientInfo Api
  getPatientInfo() {
    let patientUrl = this.ConstURL.patientInfo;
    debugger
    return this.httpService.makeHTTPPOSTRequest(patientUrl);
  }
}