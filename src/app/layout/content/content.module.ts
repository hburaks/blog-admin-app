import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentRoutingModule } from './content-routing.module';


import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { CategoriesComponent } from './categories/categories.component';
import { CommentsComponent } from './comments/comments.component';
import { TableComponent } from './table/table.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { FormsModule } from '@angular/forms';
import { PostDetailsComponent } from './posts/post-details/post-details.component';
import { CommentDetailsComponent } from './comments/comment-details/comment-details.component';

@NgModule({
  declarations: [
    UsersComponent,
    PostsComponent,
    CategoriesComponent,
    CommentsComponent,
    TableComponent,
    UserDetailsComponent,
    PostDetailsComponent,
    CommentDetailsComponent,
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    FormsModule
  ],
  exports: [
    ContentRoutingModule
  ]
})
export class ContentModule { }
