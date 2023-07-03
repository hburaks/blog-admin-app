import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  isAddNewItem: boolean = false;
  isEditItem : boolean[] = [];

  
  private pageInfoSubject: BehaviorSubject<any> = new BehaviorSubject<any>({
    pageIndex: 0,
    pageSize: 10,
    totalPageSize: 0
  });
  get PageInfo$(){
    return this.pageInfoSubject.asObservable();
  }
  setPageInfo(totalPageSize : number){
    this.pageInfoSubject.next(totalPageSize)
  }

  private isAddNewItemSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  get isAddNewItem$() {
    return this.isAddNewItemSubject.asObservable();
  }
  setIsAddNewItemValue() {
    this.isAddNewItemSubject.next(!this.isAddNewItemSubject.value);
  }

  addNewItem(){
    console.log("nothing added")
  }
  editItem(){
    console.log("nothing edited")
  }
  getIsAddNewItem(){
    return this.isAddNewItem
  }
  showEditItemCard(i : number){
    this.isEditItem[i] = !this.isEditItem[i];
  }
  getIsEditItem(){
    return this.isEditItem
  }

  
  

}
