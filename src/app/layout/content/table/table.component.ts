import { Component, Input } from '@angular/core';
import { TableService } from './table.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() table!: any[];
  constructor(
    private tableService : TableService
  ) { 
  }
  workingInTable(){
    this.tableService.working()
  }
}






