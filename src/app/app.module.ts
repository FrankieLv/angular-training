import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { Covid19TableComponent } from './angular-service-provider/covid19-table/covid19-table.component';
import { Covid19CaseServiceService, REST_URL } from './angular-service-provider/service/covid19-case-service.service';
import { ProductComponent } from './angular-component-communication/product/product.component';
import { ProductFormComponent } from './angular-component-communication/product-form/product-form.component';
import { ProductTableComponent } from './angular-component-communication/product-table/product-table.component';


@NgModule({
  declarations: [
    AppComponent,
    Covid19TableComponent,
    ProductComponent,
    ProductFormComponent,
    ProductTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [Covid19CaseServiceService, {provide: REST_URL, useValue: `https://covid-api.mmediagroup.fr/v1/cases?country=`}],
  bootstrap: [AppComponent]
})
export class AppModule { }
