import { Injectable } from '@angular/core';
import { ConfigUrl } from '../../CommonServices/configUrl';
import { HTTPService } from '../../CommonServices/http.service';

@Injectable({
  providedIn: 'root'
})
export class NewPatientService {

  constructor(private ConstURL: ConfigUrl, private httpService: HTTPService) { }

  addNewPatientApi(value){
    let patientUrl = this.ConstURL.addNewPatient;
    let data = {
        newData:value
    }
    return this.httpService.makeHTTPPOSTRequest(patientUrl,data);
  }


}