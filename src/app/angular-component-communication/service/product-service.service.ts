import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';

// @Injectable({
//   providedIn: 'root'
// })
export class ProductService {
  private products: Product[];
  
  constructor() {
    this.products = new Array<Product>(
      new Product(1, "Ball", "Sport", 300),
      new Product(2, "Ball", "Sport", 300),
      new Product(3, "Ball", "Sport", 300),
      new Product(4, "Ball", "Sport", 300),
      new Product(5,"Ball", "Sport", 300),)
    }

    getProducts(): Product[] {
        return this.products;
    }

    addProduct(newProduct: Product): void{
      this.products.push(newProduct);
    }

}
