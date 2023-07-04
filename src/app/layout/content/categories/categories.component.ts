import { Categories } from './categories';
import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './categories.service';
import { TableService } from '../table/table.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  tableIdName: string = 'categories.category_id';
  categories : Categories[] = this.categoriesService.getCategoryList();
  isEditItem : boolean[] = this.tableService.getIsEditItem();
  isAddNewItem: boolean = false;
  myIsAddNewItemSubscription: Subscription | undefined;
  pageInfo : any = {}
  myPageInfoSubscription : Subscription | undefined;
  combinedClasses: string = "";

  nameNew : string = "";

  nameIn : string = "";
  creationDateIn : string = "";
  

  constructor(
    private categoriesService : CategoriesService,
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
      if(this.nameNew){
        const currentDate = new Date();
        const creationDateNew = currentDate.toISOString().slice(0, 10); // YYYY-MM-DD formatında geçerli tarih
      
        this.categoriesService.addNewItemDetails(
          this.nameNew,
          creationDateNew,
        )
        this.updateIsAddNewItemValue()
        this.clearFormFields();
        this.setPageInfoOnInit(this.pageInfo, this.categories)
      } else{
        alert("Please fill the blank input")
      }
    }
    clearFormFields() {
      this.nameNew = "";
    }
    editItem(item : Categories, i : number){
        if(this.nameIn && this.creationDateIn){
          this.categoriesService.editItem( item ,
            this.nameIn,
            this.creationDateIn,
          )
          this.showEditItemCard(i)
        } else{
          alert("Please fill the blank input")
        }
    }
    
    
    updateEditInputs(item : Categories){
      this.nameIn = item.name;
      this.creationDateIn = item.creation_date;
    }
    
    showEditItemCard(i : number){
     this.tableService.showEditItemCard(i);
    }
    updateIsAddNewItemValue() {
      this.tableService.setIsAddNewItemValue();
    }
    getItemId(i: number){
      return this.categories[i].category_id
    }
    
    setPageInfoOnInit(pageInfo : any, table : any){
      this.tableService.setPageInfoOnInit(pageInfo, table)
    }
    getCategoryPostCount(id : number){
      return this.categoriesService.findCategoryPosts(id)
    }

}    



  
  
  

    
  
  
  
