import { Iproduct } from './../assets/product';
import { Injectable }  from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private _url: string="/assets/data/product.json";

  constructor(private http:HttpClient) { }
  getProduct(){
    return this.http.get<Iproduct[]>(this._url);
  }
}
