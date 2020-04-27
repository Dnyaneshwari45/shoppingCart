import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
productList=[];
  constructor(private _productListService:ProductsService) { }

  ngOnInit() {
    this._productListService.getProduct().subscribe(data=>this.productList=data);
  }
onShare(){
  window.alert("your product has beeen shared!!!");
}
}
