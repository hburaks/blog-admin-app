import { Component, OnInit } from '@angular/core';
import { Posts } from './posts';
import { PostsService } from './posts.service';
import { TableService } from '../table/table.service';
import { Subscription } from 'rxjs';
import { Users } from '../users/users';
import { UsersService } from '../users/users.service';
import { CategoriesService } from '../categories/categories.service';
import { Categories } from '../categories/categories';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts : Posts[] = this.postsService.getPostList();
  defaultPosts : Posts[] = this.postsService.getPostList();
  isSorted : boolean = false;

  isEditItem : boolean[] = this.tableService.getIsEditItem();
  postItem? : Posts;
  isAddNewItem: boolean = false;
  isDetailItem: boolean[] = this.tableService.getIsDetailItem();
  myIsAddNewItemSubscription: Subscription | undefined;
  pageInfo : any = {}
  myPageInfoSubscription : Subscription | undefined;
  users : Users[] = this.usersService.getUserList();
  categories : Categories[] = this.categoriesService.getCategoryList();


 
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

  userIdFilter : string | null = null;
  postIdFilter : string | null = null;
  categoryIdFilter : string | null = null;


  constructor(
    private postsService : PostsService,
    private tableService : TableService,
    private usersService : UsersService,
    private categoriesService : CategoriesService,
    private router: Router,
    private route : ActivatedRoute
  ){
  }
  
  ngOnInit(): void {
    this.posts = this.postsService.getPostList();
    this.route.queryParamMap.subscribe(params => {
      this.userIdFilter = params.get('userId') || '';
      this.postIdFilter = params.get('postId') || '';
      this.categoryIdFilter = params.get('categoryId') || '';
    });
    this.myIsAddNewItemSubscription = this.tableService.isAddNewItem$.subscribe(value => {
      this.isAddNewItem = value;
    });
    this.myPageInfoSubscription = this.tableService.PageInfo$.subscribe(value => {
      this.pageInfo = value;
    }) 
    this.combinedClasses = this.tableService.getCombinedClasses();
    this.setPageInfoOnInit(this.pageInfo, this.posts)    
    this.applyFilters();
  }

  ngOnDestroy(): void {
    if (this.myIsAddNewItemSubscription) {
      this.myIsAddNewItemSubscription.unsubscribe();
    }
    if (this.myPageInfoSubscription) {
      this.myPageInfoSubscription.unsubscribe();
    }
  }

  getFilteredPosts(userId: string | null, postId: string | null, categoryId: string | null): Posts[] {
    let filteredPosts = this.postsService.getPostList();
  
    if (userId) {
      filteredPosts = filteredPosts.filter(post => post.user_id === parseInt(userId));
    }
  
    if (postId) {
      filteredPosts = filteredPosts.filter(post => post.post_id === parseInt(postId));
    }
  
    if (categoryId) {
      filteredPosts = filteredPosts.filter(post => post.category_id === parseInt(categoryId));
    }
  
    return filteredPosts;
  }
  applyFilters() {
    const queryParams: any = {};
    if (this.userIdFilter) {
      queryParams.userId = this.userIdFilter;
    } else {
      queryParams.userId = ""
    }
    if (this.postIdFilter) {
      queryParams.postId = this.postIdFilter;
    } else {
      queryParams.postId = ""
    }
    if (this.categoryIdFilter) {
      queryParams.categoryId = this.categoryIdFilter;
    } else {
      queryParams.categoryId = ""
    }
    this.router.navigate([], {
      queryParams: queryParams,
      queryParamsHandling: 'merge'
    });
    this.posts = this.getFilteredPosts(this.userIdFilter, this.postIdFilter, this.categoryIdFilter);
    this.setPageInfoOnInit(this.pageInfo, this.posts)  
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
    this.tableService.showEditItemCard(i);
  }

  showDetailItemCard(i : number){
    this.tableService.showDetailItemCard(i);
  }

  updateDetailItemCard(item : Posts){
    this.postItem = item
  }
  closeDetailItemCard(i : number){
    this.tableService.showDetailItemCard(i);
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
  matchUserIdWithName(id : number){
    return this.usersService.matchUserIdWithName(id);
  }
  matchCategoryIdWithName(id : number){
    return this.categoriesService.matchCategoryIdWithName(id)
  }
  sortBy(table : any, reference : string){
    if(!this.isSorted){
      this.posts = this.tableService.sortByAsc(table, reference)
    }else{
      this.posts = this.tableService.sortByDesc(table, reference)
    }
    this.isSorted = !this.isSorted
  }
  

  
  


}
