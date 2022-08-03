import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../services/alertify.service';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';

// declare let alertify:any;
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService]
})

export class ProductComponent implements OnInit {
//servisi kullanmak için constructor içine sevisi girdik ve en üste import ettik
  constructor(private alertifyService:AlertifyService,
    private productService:ProductService,
    private activatedRoute:ActivatedRoute
    ) { }

  title="Ürün Listesi"
  filterText = ""
  products!: Product[];

  ngOnInit() {

    this.activatedRoute.params.subscribe(params=>{
      this.productService.getProducts(params["categoryId"]).subscribe(data=>{
        this.products=data
      }); 
    })

    
         
    
  }

   addToCart(product:any){
    this.alertifyService.success(product.name+" "+"Sepete Eklendi")
   }

}
