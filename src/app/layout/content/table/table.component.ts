import { Component, Input, OnInit } from '@angular/core';
import { TableService } from './table.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() table!: any[];
  isAddNewItem : boolean = false;
  isEditItem : boolean[] = [];
  pageIndex : number = 0;
  pageSize : number = 10;
  totalPageSize : number = 0;

  constructor(
    private tableService : TableService,
  ) {}
  ngOnInit() {
    this.showPageInfo();
  }
  
  
  showPageInfo(){
    this.totalPageSize = Math.floor(this.table.length / this.pageSize);
    let remainingItems = this.table.length % this.pageSize;
    if(remainingItems > 0){
      this.totalPageSize++
    }
  }
  addNewItem(){
    this.addNewItem = this.tableService.addNewItem
  }
  showNewItemCard(){
    this.isAddNewItem = !this.isAddNewItem;
  }
  editItem(){
    this.editItem = this.tableService.editItem
  }
  showEditItemCard(i : number){
    this.isEditItem[i] = !this.isEditItem[i];
  }
  nextPage(){
    let totalPage = this.table.length / this.pageSize;
    let remainingItems = this.table.length % this.pageSize;
    if(remainingItems > 0){
      totalPage++
    }
    if(this.pageIndex + 1 <= totalPage - 1 ){
      this.pageIndex = this.pageIndex + 1;      
    }
  }
  prevPage(){
    if(this.pageIndex - 1 >= 0 ){
      this.pageIndex = this.pageIndex - 1;
    }
  }
}






