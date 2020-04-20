import { Injectable } from '@angular/core';
import { ConfigUrl } from '../../CommonServices/configUrl';
import { HTTPService } from '../../CommonServices/http.service';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private _ConstURL: ConfigUrl, private _httpService: HTTPService) { }

  //Signup Api
  setSignUpApi(data: any){
    let signUpurl: string = this._ConstURL.signUpUrl;
    return this._httpService.makeHTTPPOSTRequest(signUpurl, data);
  }
}
