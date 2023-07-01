import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentRoutingModule } from './content-routing.module';


import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { CategoriesComponent } from './categories/categories.component';
import { CommentsComponent } from './comments/comments.component';
import { MainComponent } from './main/main.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    UsersComponent,
    PostsComponent,
    CategoriesComponent,
    CommentsComponent,
    MainComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule
  ],
  exports: [
    ContentRoutingModule
  ]
})
export class ContentModule { }
