import { Component, Input, OnInit } from '@angular/core';
import { TableService } from './table.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() table!: any[];
  @Input() tableIdName!: string;


  pageInfo : any = {}
  myPageInfoSubscription : Subscription | undefined;

  constructor(
    private tableService : TableService,
    private route : ActivatedRoute,
    private router : Router
    ) {
   
  }
   
  ngOnInit(): void {
    this.myPageInfoSubscription = this.tableService.PageInfo$.subscribe(value => {
      this.pageInfo = value;
    }) 
    const queryParams = this.route.snapshot.queryParams;
    if (queryParams['p'] !== undefined) {
    this.pageInfo.pageIndex = parseInt(queryParams['p']) - 1;
    } else {
    this.pageInfo.pageIndex = 0;
    }
    this.myPageInfoSubscription = this.tableService.PageInfo$.subscribe(value => {
      this.pageInfo = value;
    });
    this.setPageInfoOnInit(this.pageInfo, this.table)
  }

  // olmadı changesta ayrıca ilk sayfadakini  sıraya göre siliyor
  nextPage() {
    this.pageInfo.totalPageSize = Math.floor(this.table.length / this.pageInfo.pageSize);
    let remainingItems = this.table.length % this.pageInfo.pageSize;
    if (remainingItems > 0) {
      this.pageInfo.totalPageSize++;
    }
    if (this.pageInfo.pageIndex + 1 < this.pageInfo.totalPageSize) {
      this.pageInfo.pageIndex++;
      this.updateQueryParam('p', this.pageInfo.pageIndex + 1);
    }
  }
  
  prevPage() {
    if (this.pageInfo.pageIndex > 0) {
      this.pageInfo.pageIndex--;
      this.updateQueryParam('p', this.pageInfo.pageIndex + 1);
    }
  }
  
  private updateQueryParam(param: string, value: any) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { [param]: value },
      queryParamsHandling: 'merge'
    });
  }

  updateIsAddNewItemValue() {
    this.tableService.setIsAddNewItemValue();
  }

  
  setPageInfo(totalPageSize : number){
    this.tableService.setPageInfo(totalPageSize)
  }

  setPageInfoOnInit(pageInfo : any, table : any){
    this.tableService.setPageInfoOnInit(pageInfo, table)
  }
  
}






