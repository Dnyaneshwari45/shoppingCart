import { ListService } from './../list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practise1',
  templateUrl: './practise1.component.html',
  styleUrls: ['./practise1.component.css']
})
export class Practise1Component implements OnInit {
 courses=["course1","course2","course3"];
 list;
  constructor(service: ListService) { 
    this.list=service.getList();
  }
  isActive="true";
  onclick(name){
    console.log(name);

  }
  course={
    title:"The Complete Angular",
    rating:4.9745,
    students:30123,
    price:190.95,
    releaseDate:new Date(2016,3,1)

  }
onkeyUp(){
  console.log("enter key was presed");
}
isFavourite:boolean;
onstar(){
  this.isFavourite=!this.isFavourite;
}
  ngOnInit(): void {
  }

}
