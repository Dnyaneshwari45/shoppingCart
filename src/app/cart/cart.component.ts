import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items;
  checkOutForm;


  constructor(private _cartService:CartService) {
     
      }
     

  ngOnInit() {
    this.items=this._cartService.getItems();
  }
  //onSubmit(data){
   // this.items=this._cartService.clearCart();
   // this.checkOutForm.reset();
   // console.warn("Your order have been confirmed" , data);

  }

