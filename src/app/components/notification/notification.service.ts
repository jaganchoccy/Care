import { Injectable } from '@angular/core';
import { ConfigUrl } from '../../CommonServices/configUrl';
import { HTTPService } from '../../CommonServices/http.service';

@Injectable({
  providedIn: 'root'
})
export class notificationService {

  constructor(private ConstURL: ConfigUrl, private httpService: HTTPService) { }

  //get all NotificationData Api
  getNotificationData() {
    let alert = this.ConstURL.alertUrl;
    return this.httpService.makeHTTPGETRequest(alert);
  }
}