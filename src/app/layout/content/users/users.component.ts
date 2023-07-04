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
  
  nameNew : string = "";
  emailNew : string = "";
  isActiveNew : boolean = false;

  nameIn : string = "";
  emailIn : string = "";
  creationDateIn : string = "";
  isActiveIn : boolean = false;

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
  
  
  addNewItemDetails(){
    if(this.nameNew && this.emailNew){
      const currentDate = new Date();
      const creationDateNew = currentDate.toISOString().slice(0, 10); // YYYY-MM-DD formatında geçerli tarih
    
      this.usersService.addNewItemDetails(
        this.nameNew,
        this.emailNew,
        creationDateNew,
        this.isActiveNew
      )
      this.updateIsAddNewItemValue()
      this.clearFormFields();
      this.setPageInfoOnInit(this.pageInfo, this.users)
    } else{
      alert("Please fill the blank input")
    }
  }
  clearFormFields() {
    this.nameNew = "";
    this.emailNew = "";
    this.isActiveNew = false;
  }
  removeItem(i : Users) {
    this.usersService.removeItem(i)
    this.setPageInfoOnInit(this.pageInfo, this.users)
}
  editItem(item : Users, i : number){
      if(this.nameIn && this.emailIn && this.creationDateIn){
        this.usersService.editItem( item ,
          this.nameIn,
          this.emailIn,
          this.creationDateIn,
          this.isActiveIn
        )
        this.showEditItemCard(i)
      } else{
        alert("Please fill the blank input")
      }
  }
  
  updateEditInputs(item : Users){
    this.nameIn = item.name;
    this.emailIn = item.email;
    this.creationDateIn = item.creation_date;
    this.isActiveIn = item.is_active;
  }
  
  showEditItemCard(i : number){
   this.tableService.showEditItemCard(i);
  }
  updateIsAddNewItemValue() {
    this.tableService.setIsAddNewItemValue();
  }
  getItemId(i: number){
    return this.users[i].id
  }

  setPageInfoOnInit(pageInfo : any, table : any){
    this.tableService.setPageInfoOnInit(pageInfo, table)
  }
}
