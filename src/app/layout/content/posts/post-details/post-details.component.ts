import { Component } from '@angular/core';
import { Posts } from '../posts';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../posts.service';
import { UsersService } from '../../users/users.service';
import { CategoriesService } from '../../categories/categories.service';
import { Categories } from '../../categories/categories';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent {
  postItem? : Posts;
  userName : String = "";
  categoryName : String = "";
  posts : Posts[] = this.postsService.getPostList();
  categories : Categories[] = this.categoriesService.getCategoryList();

  constructor(
    private route: ActivatedRoute,
    private postsService : PostsService,
    private usersService : UsersService,
    private categoriesService : CategoriesService
    ){
    const params = this.route.snapshot.params
    const postItemId = Number(params['id']); 
    this.postItem = this.postsService.getPost(postItemId)
    this.findUserName(postItemId)
    this.findCategoryName(postItemId)
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
    const post = this.posts.find((p)=> p.post_id === post_id)
    if (post) {
      const category_id = post.category_id;
      const category = this.categoriesService.getCategory(category_id);
      if (category) {
        this.categoryName = category.name;
      }
    }
  }


}

