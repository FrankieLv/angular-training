import { Inject, Injectable, InjectionToken } from '@angular/core';
import { HttpClient}  from "@angular/common/http";
import { Covid19Case } from '../model/covid19.case.model';
import { Observable } from 'rxjs';

export const REST_URL = new InjectionToken("rest_url");

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class Covid19CaseServiceService {

  //Dummy Data
  private data: Covid19Case[];
  constructor(private readonly _httpClient: HttpClient, @Inject(REST_URL) private url: string) { 
    this.data = new Array<Covid19Case>(
      new Covid19Case(3496205, 0, 5520, "Australia"),
      new Covid19Case(3496205, 0, 7636, "Australia"),
      new Covid19Case(3496205, 0, 7636, "Australia"),
      new Covid19Case(3496205, 0, 7636, "Australia"),
      new Covid19Case(3496205, 0, 7636, "Australia"),
      new Covid19Case(3496205, 0, 7636, "Australia"),
      new Covid19Case(3496205, 0, 7636, "Australia"),
      new Covid19Case(3496205, 0, 7636, "Australia"),
      new Covid19Case(3496205, 0, 7636, "Australia"),
      new Covid19Case(3496205, 0, 7636, "Australia"))

    this.realData = [];
  }

  getCovid19Cases(): Covid19Case[] {
    return this.data;
  }


  private realData: Covid19Case[];
  getRealCovid19Cases(countryFilter: string): any{
    return this._httpClient.get(this.url + `${countryFilter}`);
  }

}
