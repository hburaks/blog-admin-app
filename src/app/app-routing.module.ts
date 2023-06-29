import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './content/categories/categories.component';
import { CommentsComponent } from './content/comments/comments.component';
import { PostsComponent } from './content/posts/posts.component';
import { UsersComponent } from './content/users/users.component';
import { MainComponent } from './content/main/main.component';

const routes: Routes = [
  {path: 'main', component : MainComponent},
  {path: 'categories', component : CategoriesComponent},
  {path: 'comments', component : CommentsComponent},
  {path: 'posts', component : PostsComponent},
  {path: 'users', component : UsersComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
