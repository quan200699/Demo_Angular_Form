import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  products: Product[] = [];
  product: Product = {};
  productForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl()
  });

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
  }

  addNewProductToList() {
    let product1: Product = {
      id: this.productForm.value.id,
      name: this.productForm.value.name,
      price: this.productForm.value.price,
      description: this.productForm.value.description
    };
    this.productService.addNewProduct(product1);
    this.productForm.reset();
    this.product = {};
  }
}
