import { Component, OnInit } from '@angular/core';
import { faSearch, faChalkboardTeacher ,faLink,faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  
  faSearch = faSearch;
  faTech = faChalkboardTeacher;
  tutor = faUser;
  course = faLink;
  SearchValue:any;

  Data:any = [
    {"name":'Angular 8',"type":'course'},
    {"name":'Python django basic',"type":'course'},
    {"name":'Angular 4',"type":'course'},
    {"name":'Anu',"type":'tutor'},
    {"name":'python',"type":'course'},
    {"name":'python anf flask Rest API',"type":'course'},
    {"name":'pradeep',"type":'tutor'},
    {"name":'AngularJS',"type":'course'},
    {"name":'NodeJs and mongodb',"type":'course'},
    {"name":'Jagan',"type":'tutor'},
    {"name":'Selva',"type":'tutor'},
    {"name":'karupu',"type":'tutor'},
    {"name":'kumaresh',"type":'tutor'},
    {"name":'Naveen',"type":'tutor'},
    {"name":'karthi',"type":'tutor'},
    ];
  filteredData: any[];
  filterValue: string;

  constructor() { }

  

  filterData(event) {
        this.filteredData = [];
        for(let i = 0; i < this.Data.length; i++) {
            let data = this.Data[i];
            let filterValue = this.Data[i].name;
            if(filterValue.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
                this.filteredData.push(data);
            }
        }
        this.filteredData;
    }
  


  ngOnInit() {
  }

}
