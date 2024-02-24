import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Product } from "../interfaces/Product";

@Injectable({
    providedIn: 'root',
})
export class ProductServices{

    products : Product [] = [] ;
    product : Product = {} as Product 
    productCategorie : string[] = []

    constructor(private http:HttpClient){
    }
    
    private getProductsAPI(){
        this.products = []
        this.http.get<Product[]>("http://localhost:3000/products").subscribe(data =>{
            for(let elem of data){
                this.products.push(elem)
                if(!this.productCategorie.includes(elem.category)){
                    this.productCategorie.push(elem.category)
                }
                
            }  
        });
    }

    getProducts(){
        this.getProductsAPI()
        return this.products
    }

    getProductsCategorie(){
        return this.productCategorie
    }

    private getProductByIdAPI(id:number){
        this.http.get<Product>("http://localhost:3000/products/"+id).subscribe((data)=>{
            this.product.id  = data.id
            this.product.name  = data.name
            this.product.price  = data.price
            this.product.imagePath  = data.imagePath
            this.product.category  = data.category
            this.product.color = data.color
            this.product.stockage = data.stockage
            this.product.description = data.description
            
        });
    }

    getById(id:number){
        this.getProductByIdAPI(id); 
        return this.product;
    }

}