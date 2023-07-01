import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor() { }
  working(){
    console.log("Table Service is working")
  }
  addNewItem(){
    console.log("nothing added")
  }
  editItem(){
    console.log("nothing edited")
  }

}
