import { Component, OnInit } from '@angular/core';
import { faClipboardList, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faClipboard = faClipboardList;
  faSearch = faSearch;

  constructor() { }

  ngOnInit() {
  }

}
