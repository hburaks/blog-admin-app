import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentRoutingModule } from './content-routing.module';


import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { CategoriesComponent } from './categories/categories.component';
import { CommentsComponent } from './comments/comments.component';
import { MainComponent } from './main/main.component';
import { TableComponent } from './table/table.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UsersComponent,
    PostsComponent,
    CategoriesComponent,
    CommentsComponent,
    MainComponent,
    TableComponent,
    UserDetailsComponent
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
