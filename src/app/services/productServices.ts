import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Product } from "../interfaces/Product";

@Injectable({
    providedIn: 'root',
   })
export class ProductServices{

    products : Product [] = [] ;
    product : Product = {} as Product 
    constructor(private http:HttpClient ){
    }
    
    private getProductsAPI(){
        this.products = []
        this.http.get<[]>("http://localhost:3000/products").subscribe(data=>{
            data.map((item)=>{
                this.products.push(item)
            })
        });
    }

    getProducts(){
        this.getProductsAPI()
        return this.products
    }

    private getProductByIdAPI(id:number){
        console.log("insideApi")
        this.http.get<Product>("http://localhost:3000/products/"+id).subscribe((data)=>{
            this.product = data
            console.log("api "+this.product)
        });
    }

    getById(id:number){
        this.getProductByIdAPI(id);
        console.log("inside methode")
        console.log("methode "+this.product)
        return this.product;
    }

}