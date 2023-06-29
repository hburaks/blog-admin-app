import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableDefModule } from './table-def/table-def.module';
import { ContentRoutingModule } from './content-routing.module';


import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { CategoriesComponent } from './categories/categories.component';
import { CommentsComponent } from './comments/comments.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
  
    UsersComponent,
    PostsComponent,
    CategoriesComponent,
    CommentsComponent,
    MainComponent

  ],
  imports: [
    CommonModule,
    TableDefModule,
    ContentRoutingModule
  ],
  exports: [
    UsersComponent,
    PostsComponent,
    CategoriesComponent,
    CommentsComponent,
    MainComponent,
    ContentRoutingModule
  ]
})
export class ContentModule { }
