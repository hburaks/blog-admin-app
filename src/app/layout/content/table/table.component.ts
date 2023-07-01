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
  
}






