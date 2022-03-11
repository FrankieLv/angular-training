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

  ngAfterViewInit(): void{
    this.nameInputRef.nativeElement.focus();
  }


  constructor() { }

  ngOnInit(): void {
  }

}
