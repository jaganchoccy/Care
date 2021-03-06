import { Injectable } from '@angular/core';
import { ConfigUrl } from '../../CommonServices/configUrl';
import { HTTPService } from '../../CommonServices/http.service';

@Injectable({
  providedIn: 'root'
})
export class vitalService {

  constructor(private ConstURL: ConfigUrl, private httpService: HTTPService) { }

  //PatientID Api
  getPatientIdApi(id) {
    let patientUrl = this.ConstURL.patientId;
    let data = {
      id:id
    }
    return this.httpService.makeHTTPPOSTRequest(patientUrl,data);
  }
}