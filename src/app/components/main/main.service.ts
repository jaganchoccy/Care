import { Injectable } from '@angular/core';
import { ConfigUrl } from '../../CommonServices/configUrl';
import { HTTPService } from '../../CommonServices/http.service';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private ConstURL: ConfigUrl, private httpService: HTTPService) { }

  getAllPatientData(){
    let patientUrl = this.ConstURL.allPatientData;
    return this.httpService.makeHTTPGETRequest(patientUrl);
  }

  getAllDoctorData(){
    let patientUrl = this.ConstURL.allDoctorData;
    return this.httpService.makeHTTPGETRequest(patientUrl);
  }


}