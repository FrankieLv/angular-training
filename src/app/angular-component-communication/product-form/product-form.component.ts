import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  newProduct: Product = new Product();

  @Output("newProduct")
  newProductEvent = new EventEmitter<Product>();

  submitForm(form: any) {
      this.newProductEvent.emit(this.newProduct);
      this.newProduct = new Product();
      form.reset();
  }

  @ViewChild("nameInputRef")
  nameInputRef: ElementRef;

 
  ngAfterViewChecked(): void{
    console.log("product-form-component - ngAfterViewChecked()");
  }
  ngAfterViewInit(): void{
    console.log("product-form-component - ngAfterViewInit():nameInputRef");
    this.nameInputRef.nativeElement.focus();
  }

  ngAfterContentInit(): void{
    console.log("product-form-component - ngAfterConentInit()");
  }

  ngAfterContentChecked(): void{
    console.log("product-form-component - ngAfterContentChecked()");
  }


  constructor() { }
  ngOnInit(): void {
    
  }
 

}
