import { Component, OnInit } from '@angular/core';
import { faFacebookSquare, faLinkedin, faGoogle } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  faFacebookSquare = faFacebookSquare;
  faLinkedinIn = faLinkedin;
  faGoogle = faGoogle;

  constructor() { }

  ngOnInit() {
  }

}
