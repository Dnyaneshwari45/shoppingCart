import { ProductsService } from './../products.service';
import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productId: any;
 productList=[];
  constructor(private route:ActivatedRoute,private _productListService:ProductsService,
    private _cartService:CartService) { }

  ngOnInit() {
this.route.paramMap.subscribe(param=>{
  let id=+param.get('productId');
  this.productId=id;

  this._productListService.getProduct().subscribe(data=>this.productList=data);
})
  }
  addToCart(products){
    this._cartService.addTocart(products);
    window.alert('your product has been added');
  }

}
