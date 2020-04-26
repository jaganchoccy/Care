import { Injectable } from '@angular/core';
import { ConfigUrl } from '../app/CommonServices/configUrl';
import { HTTPService } from '../app/CommonServices/http.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private ConstURL: ConfigUrl, private httpService: HTTPService) { }

  //get queue alert msg Api
  getAlertMsg() {
    let queueAlert = this.ConstURL.queueAlert;
    return this.httpService.makeHTTPGETRequest(queueAlert);
  }

  //deleteAlertMsg
  deleteAlertMsg(){
    let queueAlert = this.ConstURL.deleteQueueAlert;
    return this.httpService.makeHTTPGETRequest(queueAlert);
  }
}