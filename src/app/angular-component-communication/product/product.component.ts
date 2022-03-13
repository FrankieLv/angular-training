import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductFormComponent } from '../product-form/product-form.component';
import {ProductService} from '../service/product-service.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productService: ProductService;
  constructor() {
    this.productService = new ProductService();
   }

  //  constructor(private productService: ProductService) {
  //  }



  addProduct(newProduct: Product): void {
    this.productService.addProduct(newProduct);
  }

  testlf: string;

  ngOnInit(): void {
  }
  
}
