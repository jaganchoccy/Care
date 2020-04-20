import { Injectable } from '@angular/core';
import { ConfigUrl } from '../../CommonServices/configUrl';
import { HTTPService } from '../../CommonServices/http.service';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  constructor(private ConstURL: ConfigUrl, private httpService: HTTPService) { }

  //SignIn Api
  setSignInApi(data) {
    let signInurl = this.ConstURL.signInUrl;
    return this.httpService.makeHTTPPOSTRequest(signInurl, data);
  }

  //forgot pswd
  forgetpswd(data) {
    let reset = this.ConstURL.reset;
    return this.httpService.makeHTTPPOSTRequest(reset, data);
  }

}
