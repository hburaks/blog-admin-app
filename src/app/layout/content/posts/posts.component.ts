import { Component, OnInit } from '@angular/core';
import { Posts } from './posts';
import { PostsService } from './posts.service';
import { TableService } from '../table/table.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  tableIdName: string = 'posts.post_id';
  posts : Posts[] = this.postsService.getPostList();
  isEditItem : boolean[] = this.tableService.getIsEditItem();
  isAddNewItem: boolean = false;
  myIsAddNewItemSubscription: Subscription | undefined;
  pageInfo : any = {}
  myPageInfoSubscription : Subscription | undefined;

  combinedClasses: string = "";

  userIdNew : number = 0;
  categoryIdNew : number = 0;
  titleNew : string = "";
  contentNew : string = "";
  viewCountNew : number = 0;
  isPublishedNew : boolean = false;

  userIdIn : number = 0;
  categoryIdIn : number = 0;
  titleIn : string = "";
  contentIn : string = "";
  viewCountIn : number = 0;
  creationDateIn : string = "";
  isPublishedIn : boolean = false; 

  constructor(
    private postsService : PostsService,
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
    this.setPageInfoOnInit(this.pageInfo, this.posts)    
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
    if(this.userIdNew && this.categoryIdNew && this.titleNew && this.contentNew){
      const currentDate = new Date();
      const creationDateNew = currentDate.toISOString().slice(0, 10);
      this.postsService.addNewItemDetails(
        this.userIdNew,
        this.categoryIdNew,
        this.titleNew,
        this.contentNew,
        this.viewCountNew,
        creationDateNew,
        this.isPublishedNew
      )
      this.updateIsAddNewItemValue()
      this.clearFormFields();
      this.setPageInfoOnInit(this.pageInfo, this.posts)
    } else{
      alert("Please fill the blank input")
    }
  }

  clearFormFields() {
    this.userIdNew = 0;
    this.categoryIdNew = 0;
    this.titleNew = "";
    this.contentNew = "";
    this.viewCountNew = 0;
    this.isPublishedNew = false;
  }

  removeItem(item : Posts) {
    this.postsService.removeItem(item);
    this.setPageInfoOnInit(this.pageInfo, this.posts)
  }

  editItem( item : Posts, i : number){
    if(this.userIdIn && this.categoryIdIn && this.titleIn && this.contentIn){
      this.postsService.editItem( item ,
        this.userIdIn,
        this.categoryIdIn,
        this.titleIn,
        this.contentIn,
        this.viewCountIn,
        this.creationDateIn,
        this.isPublishedIn
      )
      this.showEditItemCard(i)
    } else{
      alert("Please fill the blank input")
    }
  }

  showEditItemCard(i : number){
    this.showEditItemCard = this.tableService.showEditItemCard;
  }

  updateEditInputs(item : Posts){
    this.userIdIn = item.user_id;
    this.categoryIdIn = item.category_id;
    this.titleIn = item.title;
    this.contentIn = item.content;
    this.viewCountIn = item.view_count;
    this.creationDateIn = item.creation_date;
    this.isPublishedIn = item.is_published;
  }
  
  updateIsAddNewItemValue() {
    this.tableService.setIsAddNewItemValue();
  }
  getItemId(i: number){
    return this.posts[i].post_id
  }

  setPageInfoOnInit(pageInfo : any, table : any){
    this.tableService.setPageInfoOnInit(pageInfo, table)
  }
}




   
    
  
  
  
  
  
 
  
