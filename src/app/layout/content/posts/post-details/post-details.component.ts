import { Component, OnInit } from '@angular/core';
import { Posts } from '../posts';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../posts.service';
import { UsersService } from '../../users/users.service';
import { CategoriesService } from '../../categories/categories.service';
import { Categories } from '../../categories/categories';
import { TableService } from '../../table/table.service';
import { Subscription } from 'rxjs';
import { CommentsService } from '../../comments/comments.service';
import { Comments } from '../../comments/comments';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  postItem? : Posts;
  userName : String = "";
  categoryName : String = "";
  posts : Posts[] = this.postsService.getPostList();
  categories : Categories[] = this.categoriesService.getCategoryList();
  pageInfo : any = {}
  myPageInfoSubscription : Subscription | undefined;
  comments : Comments[] = this.commentsService.getCommentsList();

  constructor(
    private route: ActivatedRoute,
    private postsService : PostsService,
    private usersService : UsersService,
    private categoriesService : CategoriesService,
    private tableService : TableService,
    private commentsService : CommentsService
    ){
    const params = this.route.snapshot.params
    const postItemId = Number(params['id']); 
    this.postItem = this.postsService.getPost(postItemId)
    this.findUserName(postItemId)
    this.findCategoryName(postItemId)
    this.filterCommentsMatched(postItemId)
  }
  ngOnInit(): void {
    this.myPageInfoSubscription = this.tableService.PageInfo$.subscribe(value => {
      this.pageInfo = value;
    }) 
  }

  findUserName( post_id : number){
    const post = this.posts.find((p)=> p.post_id === post_id)
    if (post) {
      const user_id = post.user_id;
      const user = this.usersService.getUser(user_id);
      if (user) {
        this.userName = user.name;
      }
    }
  }
  findCategoryName( post_id : number){
    this.categories = this.categoriesService.getCategoryList();
    const post = this.posts.find((p)=> p.post_id === post_id)
    if (post) {
      const category_id = post.category_id;
      const category = this.categoriesService.getCategory(category_id);
      if (category) {
        this.categoryName = category.name;
      }
    }
  }

  filterCommentsMatched(id : number){
    this.comments = this.comments.filter(comment => comment.post_id === id);
  }


}

