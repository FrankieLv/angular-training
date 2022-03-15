import { Component, OnInit } from '@angular/core';
import { Covid19Case } from '../model/covid19.case.model';
import { Covid19CaseServiceService } from '../service/covid19-case-service.service';

@Component({
  selector: 'app-covid19-table',
  templateUrl: './covid19-table.component.html',
  styleUrls: ['./covid19-table.component.css']
})
export class Covid19TableComponent {


  constructor(private covid19CaseServiceService: Covid19CaseServiceService ) { 
    this.realData = [];  
    this.country = "US";
  }

  // getCovid19Cases(): Covid19Case[] {
  //   return this.data;
  // }
  getCovid19Cases(): Covid19Case[] {
    return this.covid19CaseServiceService.getCovid19Cases();
  }

  realData: Covid19Case[];
  country: string;
  loading: boolean;
  getRealCovid19Cases(): void {
    this.covid19CaseServiceService.getRealCovid19Cases(this.country).subscribe(result => {
       this.realData = result;
      }
    )
  }
}
