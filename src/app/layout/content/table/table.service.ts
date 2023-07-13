import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  isAddNewItem: boolean = false;
  isEditItem : boolean[] = [];
  isDetailItem : boolean[] = [];
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
  showDetailItemCard(i : number){
    this.isDetailItem[i] = !this.isDetailItem[i];
  }
  getIsDetailItem(){
    return this.isDetailItem
  }
  getCombinedClasses(): string {
    this.combinedClasses = 'container d-flex align-items-center gap-2 justify-content-between';
    return this.combinedClasses;
  }

  setPageInfoOnInit(pageInfo : any, table : any){
    let pageSize = Math.floor(table.length / pageInfo.pageSize);
    let remainingItems = table.length % pageInfo.pageSize;
    if (remainingItems > 0) {
      pageSize++;
      this.setPageInfo(pageSize)
    } else{
      this.setPageInfo(pageSize)
    }
  }

  sortByAsc(table: any[], reference: string): any[] {
    return table.sort((a, b) => {
      return b[reference] - a[reference];
    });
  }

  sortByDesc(table: any[], reference: string): any[] {
    return table.sort((a, b) => {
      return a[reference] - b[reference];
    });
  }
  
}
