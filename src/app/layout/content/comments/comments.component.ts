import { Component, OnInit } from '@angular/core';
import { Comments } from './comments';
import { CommentsService } from './comments.service';
import { TableService } from '../table/table.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../posts/posts.service';
import { UsersService } from '../users/users.service';
import { Posts } from '../posts/posts';
import { Users } from '../users/users';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  comments : Comments[] = this.commentsService.getCommentsList();
  commentsFiltered : Comments[] | null = null ;
  filteredComments: Comments[] = [];
  isEditItem : boolean[] = this.tableService.getIsEditItem();
  isAddNewItem: boolean = false;
  myIsAddNewItemSubscription: Subscription | undefined;
  pageInfo : any = {}
  myPageInfoSubscription : Subscription | undefined;
  combinedClasses: string = "";
  isCommentsFiltered : boolean = false;
  postIdToFilter : number = 0;
  posts : Posts[] = this.postsService.getPostList();
  users : Users[] = this.usersService.getUserList();

  postIdNew : number = 0;
  userIdNew : number = 0;
  commentNew : string = "";
  isConfirmedNew : boolean = false;

  postIdIn : number = 0;
  userIdIn : number = 0;
  commentIn : string = "";
  creationDateIn : string = "";
  isConfirmedIn : boolean = false; 
  
  constructor(
    private commentsService : CommentsService,
    private postsService : PostsService,
    private usersService : UsersService,
    private tableService : TableService,
  ){
  }

  ngOnInit(): void {
    this.myIsAddNewItemSubscription = this.tableService.isAddNewItem$.subscribe(value => {
      this.isAddNewItem = value;
    });
    this.myPageInfoSubscription = this.tableService.PageInfo$.subscribe(value => {
      this.pageInfo = value;
    }) 
    this.comments = this.commentsService.getCommentsList();
    this.combinedClasses = this.tableService.getCombinedClasses();
    this.setPageInfoOnInit(this.pageInfo, this.comments)
    this.isCommentsFiltered = false;
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
    if(this.userIdNew && this.postIdNew && this.commentNew){
      const currentDate = new Date();
      const creationDateNew = currentDate.toISOString().slice(0, 10);
      this.commentsService.addNewItemDetails(
        this.postIdNew,
        this.userIdNew,
        this.commentNew,
        creationDateNew,
        this.isConfirmedNew
      )
      this.updateIsAddNewItemValue()
      this.clearFormFields();
      this.setPageInfoOnInit(this.pageInfo, this.comments)
    } else{
      alert("Please fill the blank input")
    }
  }
  clearFormFields() {
    this.postIdNew = 0;
    this.userIdNew = 0;
    this.commentNew = "";
    this.isConfirmedNew = false;
  }
  removeItem(item : Comments) {
    this.commentsService.removeItem(item);
    this.setPageInfoOnInit(this.pageInfo, this.comments)
  }
  editItem( item : Comments, i : number){
    if(this.postIdIn && this.userIdIn  && this.commentIn && this.creationDateIn){
      this.commentsService.editItem( item ,
        this.postIdIn,
        this.userIdIn,
        this.commentIn,
        this.creationDateIn,
        this.isConfirmedIn
      )
      this.showEditItemCard(i)
    } else{
      alert("Please fill the blank input")
    }
  }
  showEditItemCard(i : number){
    this.tableService.showEditItemCard(i);
  }
  updateEditInputs(item : Comments){
    this.postIdIn = item.post_id;
    this.userIdIn = item.user_id;
    this.commentIn = item.comment;
    this.creationDateIn = item.creation_date;
    this.isConfirmedIn = item.is_confirmed;
  }
  updateIsAddNewItemValue() {
    this.tableService.setIsAddNewItemValue();
  }
  getItemId(i: number){
    return this.comments[i].comment_id
  }

  setPageInfoOnInit(pageInfo : any, table : any){
    this.tableService.setPageInfoOnInit(pageInfo, table)
  }  
  toggleFilter(){
    this.isCommentsFiltered = !this.isCommentsFiltered
  }
  
  filterByPostId(id : number): void {
    this.commentsFiltered = this.comments.filter(comment => comment.post_id === id);
    this.postIdToFilter = id;
  }
}

  





   
    
  
  
  
  
  
 
  
