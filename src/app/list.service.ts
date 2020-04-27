import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  getList(){
    return ["1","2","3","4"];
  }
}
