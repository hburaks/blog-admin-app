import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { CommentsComponent } from './comments/comments.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  {path: 'main', component : MainComponent},
  {path: 'categories', component : CategoriesComponent},
  {path: 'comments', component : CommentsComponent},
  {path: 'posts', component : PostsComponent},
  {path: 'users', component : UsersComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class ContentRoutingModule { }
