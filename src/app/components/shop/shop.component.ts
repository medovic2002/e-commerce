import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/Product';
import { ProductServices } from 'src/app/services/productServices';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit{

  product : Product[] = []

  constructor(private productService:ProductServices){
  }

  ngOnInit() {
    this.product = this.productService.getProducts();
  }

  

}
