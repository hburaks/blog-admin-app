import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { SideBarComponent } from './content/side-bar/side-bar.component';
import { UsersComponent } from './content/users/users.component';
import { PostsComponent } from './content/posts/posts.component';
import { CategoriesComponent } from './content/categories/categories.component';
import { CommentsComponent } from './content/comments/comments.component';
import { MainComponent } from './content/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    SideBarComponent,
    UsersComponent,
    PostsComponent,
    CategoriesComponent,
    CommentsComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
