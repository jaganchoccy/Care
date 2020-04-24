import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { Router } from '@angular/router';
import { ShareDataService } from '../../CommonServices/share-data.service';
import { vitalService } from './vital-signs.service';
import { faHeartbeat, faArrowDown,faArrowUp, faBurn } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-vital-signs',
  templateUrl: './vital-signs.component.html',
  styleUrls: ['./vital-signs.component.scss']
})
export class VitalSignsComponent implements OnInit {

  getVitalDetails: any[] = [];
  getBodyTemp: any[] = [];
  heartRateData: any[] = [];
  chartTempLabel: any[] = [];
  heartRateAvg:any;
  heartRateMin:any;
  heartRateMax:any;
  heart = faHeartbeat;
  faArrowDown =faArrowDown;
  faBurn = faBurn;
  faArrowUp =faArrowUp;

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'line';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [], label: 'Temperatute' }
  ];
  ///

  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();
  bodyTempLabel: any[] = [];
  byDate: string;
  loader: boolean;
  getBloodPre: any[];
  getBloodSys: any[];
  getBloodDia: any[];
  bloodPreSysAvg: number;
  bloodPreSysMin: number;
  bloodPreDiaAvg: number;
  bloodPreDiaMin: number;
  bloodPreDiaMax: number;
  bloodPreSysMax: number;

  constructor(private _shareData: ShareDataService, private _route: Router, private _patientS: vitalService, ) {
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];
  }

  ngOnInit() {
    this.getVitalData();
  }


  //getvitalData
  getVitalData() {
    let id = this._shareData.getPatientId();
    if (id != undefined) {
      this.loader = true;
      this._patientS.getPatientIdApi(id).subscribe(res => {
        this.loader = false;
        if (res.error) {
          console.log(res, 'err');
        } else {
          let result = res.Data.body.Documents;
          this.getVitalDetails = []
          result.forEach(ele => {
            this['obj' + ele] = {}
            this['obj' + ele]["bodyTemp"] = ele.temperature || '',
              this['obj' + ele]["bpsystole"] = ele.bpsystole || '',
              this['obj' + ele]["bpdiastole"] = ele.bpdiastole || '',
              this['obj' + ele]["heartrate"] = ele.heartrate || '',
              this['obj' + ele]["EventProcessedUtcTime"] = ele.EventProcessedUtcTime || ''
            this.getVitalDetails.push(this['obj' + ele])
          });
          if (this.getVitalDetails.length != 0) {
            this.bodyTemp();
            this.heartRate();
            this.bloodPressure();
          }
        }
      });
    } else {
      this._route.navigateByUrl('/Search')
    }

  }

  //filterByDate
  filterByDate(val) {
    this.byDate = val;
    this.chartTempLabel = []
    if (this.byDate != undefined) {
      this.bodyTempLabel.forEach(ele => {
        this.chartTempLabel.push(this.dateFormat(ele, this.byDate));
      })
    }

    this.barChartLabels = this.chartTempLabel;

    console.log(this.barChartLabels, val)
  }
  //get body temperature
  bodyTemp() {
    this.getBodyTemp = [];
    this.getVitalDetails.forEach(ele => {
      this.getBodyTemp.push(ele.bodyTemp)
    })
    let Value: any = this.getBodyTemp.map((val) => {
      return Math.floor(val)
    });
    Value.forEach((el, index) => {
      this.barChartData[0].data[index] = el;
    });
    this.barChartData[0].data.push(Value)

    //label
    this.bodyTempLabel = []
    this.getVitalDetails.forEach(ele => {
      this.bodyTempLabel.push(ele.EventProcessedUtcTime)
    });

    this.filterByDate('hour')

  }



//blood presure
  bloodPressure(){
    this.getBloodSys = [];
    this.getBloodDia = [];
    this.getVitalDetails.forEach(ele => {
      this.getBloodSys.push(ele.bpsystole);
      this.getBloodDia.push(ele.bpdiastole);
    })
    //sys
    this.bloodPreSysAvg = this.getBloodSys.reduce((a,b) => a + b, 0) / this.getBloodSys.length
    this.bloodPreSysMax = Math.max(...this.getBloodSys);
    this.bloodPreSysMin = Math.min(...this.getBloodSys);
    //dia
    this.bloodPreDiaAvg = this.getBloodDia.reduce((a,b) => a + b, 0) / this.getBloodDia.length
    this.bloodPreDiaMax = Math.max(...this.getBloodDia);
    this.bloodPreDiaMin = Math.min(...this.getBloodDia);
    

  }




  dateFormat(val, byDate) {
    var fromDate = val;
    var x = fromDate.split('T');
    var dateObj = new Date(x[0]);
    var time = x[1].slice(0, 8)

    if (byDate == 'day') {
      var day = dateObj.getUTCDate();
      return day;
    } else if (byDate == 'month') {
      var month = dateObj.getUTCMonth() + 1; //months from 1-12
      return month;
    } else if (byDate == 'year') {
      var year = dateObj.getUTCFullYear();
      return year;
    } else if (byDate == 'hour') {
      var hour = time.split(':')
      return hour[0];
    } else if (byDate == 'minute') {
      var min = time.split(':')
      return min[1];
    }
  }

  //calculate heart Rate
  heartRate() {
    this.heartRateData = [];
    this.getVitalDetails.forEach(item => {
      this.heartRateData.push(item.heartrate)
    })
    this.heartRateAvg = this.heartRateData.reduce((a,b) => a + b, 0) / this.heartRateData.length
    this.heartRateMax = Math.max(...this.heartRateData);
    this.heartRateMin = Math.min(...this.heartRateData);
    
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    this.barChartType = this.barChartType === 'bar' ? 'line' : 'bar';
  }

}
