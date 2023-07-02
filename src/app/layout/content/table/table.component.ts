import { Component, Input, OnInit } from '@angular/core';
import { TableService } from './table.service';
import { ActivatedRoute, Router } from '@angular/router';
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
    private route : ActivatedRoute,
    private router : Router
    ) {
    const queryParams = this.route.snapshot.queryParams;
    if(queryParams['p'] !== undefined ){
      this.pageIndex = parseInt(queryParams['p']) - 1
    }
  }
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
  nextPage() {
    let totalPage = this.table.length / this.pageSize;
    let remainingItems = this.table.length % this.pageSize;
    if (remainingItems > 0) {
      totalPage++;
    }
    if (this.pageIndex + 1 <= totalPage - 1) {
      this.pageIndex = this.pageIndex + 1;
      this.updateQueryParam('p', this.pageIndex + 1);
    }
  }
  
  prevPage() {
    if (this.pageIndex - 1 >= 0) {
      this.pageIndex = this.pageIndex - 1;
      this.updateQueryParam('p', this.pageIndex + 1);
    }
  }
  
  private updateQueryParam(param: string, value: any) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { [param]: value },
      queryParamsHandling: 'merge'
    });
  }
  
}






