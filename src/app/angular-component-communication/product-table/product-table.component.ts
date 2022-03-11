import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductService } from '../service/product-service.service';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {
  constructor(){}
  //constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  @Input("productService")
  productService: ProductService;

  getProducts(): Product[] {
    return this.productService.getProducts();
}

}
