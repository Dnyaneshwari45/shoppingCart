import { RouterModule } from '@angular/router';
import { ListService } from './list.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Practise1Component } from './practise1/practise1.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FollowersComponent } from './followers/followers.component';
import { PostsComponent } from './posts/posts.component';
import { Nav1Component } from './nav1/nav1.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductAlertComponent } from './product-alert/product-alert.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';



@NgModule({
  declarations: [
    AppComponent,
    Practise1Component,
    NavbarComponent,
    FollowersComponent,
    PostsComponent,
    Nav1Component,
    ProductListComponent,
    ProductAlertComponent,
    ProductDetailComponent,
    CartComponent,
    ShippingComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,
    AppRoutingModule,HttpClientModule,
    RouterModule.forRoot([
      {path:'',component:ProductListComponent},
      {path:'products/:productId',component:ProductDetailComponent},
      {path:'cart',component:CartComponent},
      {path:'shipping' , component:ShippingComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
