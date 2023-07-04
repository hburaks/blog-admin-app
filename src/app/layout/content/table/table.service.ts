import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  isAddNewItem: boolean = false;
  isEditItem : boolean[] = [];
  combinedClasses : string = "";
  
  private pageInfoSubject: BehaviorSubject<any> = new BehaviorSubject<any>({
    pageIndex: 0,
    pageSize: 10,
    totalPageSize: 1
  });
  get PageInfo$(){
    return this.pageInfoSubject.asObservable();
  }
  
  setPageInfo(totalPageSize: number) {
    this.pageInfoSubject.next({
      ...this.pageInfoSubject.value,
      totalPageSize: totalPageSize
    });
  }

  private isAddNewItemSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  get isAddNewItem$() {
    return this.isAddNewItemSubject.asObservable();
  }
  setIsAddNewItemValue() {
    this.isAddNewItemSubject.next(!this.isAddNewItemSubject.value);
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
  getCombinedClasses(): string {
    this.combinedClasses = 'container d-flex align-items-center gap-2 justify-content-between';
    return this.combinedClasses;
  }

  setPageInfoOnInit(pageInfo : any, table : any){
    pageInfo.totalPageSize = Math.floor(table.length / pageInfo.pageSize);
    let remainingItems = table.length % pageInfo.pageSize;
    if (remainingItems > 0) {
      pageInfo.totalPageSize++;
    }
  }
  
}
