import { Component, Input } from '@angular/core';
import { TableService } from './table.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() table!: any[];
  @Input()
  isAddNewItem : boolean = false;
  isEditItem : boolean[] = [];

  constructor(
    private tableService : TableService,
  ) { 
    

  }
 
  value: any = "";
  addNewItem() {
    const newItem: any = {};
    const keys = Object.keys(this.table[0]);
  
    for(let i = 0; i < keys.length; i++){
      newItem[keys[i]] = this.value;

    }
    this.table.push(newItem);
    this.isAddNewItem = false;
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






