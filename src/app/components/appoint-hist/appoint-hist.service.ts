import { Injectable } from '@angular/core';
import { ConfigUrl } from '../../CommonServices/configUrl';
import { HTTPService } from '../../CommonServices/http.service';

@Injectable({
  providedIn: 'root'
})
export class appointHistService {

  constructor(private ConstURL: ConfigUrl, private httpService: HTTPService) { }


  
}