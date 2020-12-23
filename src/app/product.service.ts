import { Injectable } from '@angular/core';
import {Product} from './model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [];

  constructor() { }

  addNewProduct(product: Product){
    this.products.push(product);
  }

  getAll(){
    return this.products;
  }
}
