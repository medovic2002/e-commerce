import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/Product';
import { ProductServices } from 'src/app/services/productServices';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{

  product !: Product 
  id = this.activatedRoute.snapshot.params['productID'].split("-")[1];

  constructor(private activatedRoute: ActivatedRoute,private productService:ProductServices) { }

  ngOnInit() {
    let id = +this.activatedRoute.snapshot.params['productID'].split("-")[0];
    console.log("before")
    this.product = this.productService.getById(id);
    console.log("after")
  }

}
