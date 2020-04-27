import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  ShippingCost;
  constructor(private _cartService :CartService) { }

  ngOnInit() {
    this.ShippingCost=this._cartService.getShippingPrices();
  }

}
