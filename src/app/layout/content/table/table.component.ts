import { Component, Input } from '@angular/core';
import { TableService } from './table.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() table!: any[];
  isAddNewItem : boolean = false;
  isEditItem : boolean[] = [];
  pageIndex : number = 0;
  pageSize : number = 10;
  linkId : number = this.pageIndex + 1;

  constructor(
    private tableService : TableService,
  ) { 
    

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
    
    if(this.pageIndex - 1 > 0 ){
      this.pageIndex = this.pageIndex - 1;
    }
  }
}






