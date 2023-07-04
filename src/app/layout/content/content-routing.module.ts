import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { CommentsComponent } from './comments/comments.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { MainComponent } from './main/main.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { PostDetailsComponent } from './posts/post-details/post-details.component';
import { CommentDetailsComponent } from './comments/comment-details/comment-details.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  {path: 'main', component : MainComponent},
  {path: 'categories', component : CategoriesComponent},
  {path: 'comments', component : CommentsComponent},
  {path: 'comments/:id', component : CommentDetailsComponent},
  {path: 'posts', component : PostsComponent},
  {path: 'posts/:id', component : PostDetailsComponent},
  {path: 'users', component : UsersComponent},
  {path: 'users/:id', component : UserDetailsComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class ContentRoutingModule { }
