import { Component, OnInit } from '@angular/core';
import { Covid19Case } from '../model/covid19.case.model';
import { Covid19CaseServiceService } from '../service/covid19-case-service.service';

@Component({
  selector: 'app-covid19-table',
  templateUrl: './covid19-table.component.html',
  styleUrls: ['./covid19-table.component.css']
})
export class Covid19TableComponent {

  private data: Covid19Case[];
  constructor(private covid19CaseServiceService: Covid19CaseServiceService ) { 
    this.data = new Array<Covid19Case>(
      new Covid19Case(175525, 0, 7636, "Afghanistan"),
      new Covid19Case(175525, 0, 7636, "Afghanistan"),
      new Covid19Case(175525, 0, 7636, "Afghanistan"),
      new Covid19Case(175525, 0, 7636, "Afghanistan"),
      new Covid19Case(175525, 0, 7636, "Afghanistan"),
      new Covid19Case(175525, 0, 7636, "Afghanistan"),
      new Covid19Case(175525, 0, 7636, "Afghanistan"),
      new Covid19Case(175525, 0, 7636, "Afghanistan"),
      new Covid19Case(175525, 0, 7636, "Afghanistan"),
      new Covid19Case(175525, 0, 7636, "Afghanistan"))

    this.realData = [];  
    this.country = "US";
  }

  // getCovid19Cases(): Covid19Case[] {
  //   return this.data;
  // }
  realData: Covid19Case[];
  country: string;
  loading: boolean;

  getCovid19Cases(): Covid19Case[] {
    return this.covid19CaseServiceService.getCovid19Cases();
  }
  getRealCovid19Cases(): void {
    this.covid19CaseServiceService.getRealCovid19Cases(this.country).subscribe(result => {
      for (let stateKey in result) {
          const stateData = result[stateKey];
          this.realData.push({
              confirmed: stateData.confirmed,
              recovered: stateData.recovered,
              deaths: stateData.deaths,
              state: stateKey,
          })
      }}
    )
  }
}
