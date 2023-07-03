import { Component, OnInit } from '@angular/core';
import { Users } from './users';
import { UsersService } from './users.service';
import { TableService } from '../table/table.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  tableIdName: string = 'users.id';
  users : Users[] = this.usersService.getUserList();
  isEditItem : boolean[] = this.tableService.getIsEditItem();
  isAddNewItem: boolean = false;
  myIsAddNewItemSubscription: Subscription | undefined;
  pageInfo : any = {}
  myPageInfoSubscription : Subscription | undefined;

  combinedClasses: string = "";
  nameIn : string = "";
  emailIn : string = "";
  isActiveIn : boolean = false 

  
  addNewItem(){
    this.addNewItem = this.tableService.addNewItem
  }
  addNewItemDetails(){
    if(this.nameIn && this.emailIn){
      const currentDate = new Date();
      const creationDateIn = currentDate.toISOString().slice(0, 10); // YYYY-MM-DD formatında geçerli tarih
    
      this.usersService.addNewItemDetails(
        this.nameIn,
        this.emailIn,
        creationDateIn,
        this.isActiveIn
      )
      this.updateIsAddNewItemValue()
      this.clearFormFields();
    } else{
      alert("Please fill the blank input")
    }
  }
  clearFormFields() {
    this.nameIn = "";
    this.emailIn = "";
    this.isActiveIn = false;
  }
  editItem(){
    this.editItem = this.tableService.editItem
  }
  
  showEditItemCard(i : number){
    this.showEditItemCard = this.tableService.showEditItemCard;
  }
  updateIsAddNewItemValue() {
    this.tableService.setIsAddNewItemValue();
  }
  getItemId(i: number){
    console.log(this.users[i].id)
    return this.users[i].id
  }
  
  constructor(
    private usersService : UsersService,
    private tableService : TableService
    ){
    }
    ngOnInit(): void {
      this.myIsAddNewItemSubscription = this.tableService.isAddNewItem$.subscribe(value => {
        this.isAddNewItem = value;
      });
      this.myPageInfoSubscription = this.tableService.PageInfo$.subscribe(value => {
        this.pageInfo = value;
      }) 
      this.combinedClasses = this.tableService.getCombinedClasses();
    }
    ngOnDestroy(): void {
      if (this.myIsAddNewItemSubscription) {
        this.myIsAddNewItemSubscription.unsubscribe();
      }
      if (this.myPageInfoSubscription) {
        this.myPageInfoSubscription.unsubscribe();
      }
    }
}
