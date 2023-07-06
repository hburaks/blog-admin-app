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
    this.filterCommentsMatched(postItemId)
  }
  ngOnInit(): void {
    this.myPageInfoSubscription = this.tableService.PageInfo$.subscribe(value => {
      this.pageInfo = value;
    }) 
  }
  filterCommentsMatched(id : number){
    this.comments = this.comments.filter(comment => comment.post_id === id);
  }
  matchUserIdWithName(id : number){
    return this.usersService.matchUserIdWithName(id);
  }
  matchCategoryIdWithName(id : number){
    return this.categoriesService.matchCategoryIdWithName(id)
  }
}

