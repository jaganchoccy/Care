import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { Router } from '@angular/router';
import { ShareDataService } from '../../CommonServices/share-data.service';
import { vitalService } from './vital-signs.service';

@Component({
  selector: 'app-vital-signs',
  templateUrl: './vital-signs.component.html',
  styleUrls: ['./vital-signs.component.scss']
})
export class VitalSignsComponent implements OnInit {

  getVitalDetails: any[] = [];
  getBodyTemp: any[] = [];

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [], label: 'Temp' }
  ];
  ///

  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();

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
      this._patientS.getPatientIdApi(id).subscribe(res => {
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
          }
        }
      });
    } else {
      this._route.navigateByUrl('/Search')
    }

  }
  //get body temperature
  bodyTemp() {
    this.getBodyTemp = [];
    this.getVitalDetails.forEach(ele => {
      this.getBodyTemp.push(ele.bodyTemp)
    })
    debugger

    let Value: any = this.getBodyTemp.map((val) => {
      return Math.floor(val)
    });
    this.barChartData[0].data.push(30,44,54)
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
