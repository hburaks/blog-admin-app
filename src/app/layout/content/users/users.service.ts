import { Injectable } from '@angular/core';
import { Users } from './users';
import { PostsService } from '../posts/posts.service';
import { Posts } from '../posts/posts';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private users: Users[] = [
    {
      id: 1,
      name: "dcaughan0",
      email: "flewsy0@census.gov",
      creation_date: "2008-09-27",
      is_active: true
    },
    {
      id: 2,
      name: "mswanton1",
      email: "kolyhane1@theguardian.com",
      creation_date: "2015-09-14",
      is_active: true
    },
    {
      id: 3,
      name: "wmannion2",
      email: "jisacoff2@archive.org",
      creation_date: "2022-09-27",
      is_active: false
    },
    {
      id: 4,
      name: "cwilacot3",
      email: "bhadwin3@nhs.uk",
      creation_date: "2009-06-22",
      is_active: true
    },
    {
      id: 5,
      name: "mdulson4",
      email: "wsherred4@ameblo.jp",
      creation_date: "2000-09-27",
      is_active: true
    }
  ];
  posts : Posts[] = this.postsService.getPostList();
  isUserHasPost : boolean = false;

  constructor(
    private postsService : PostsService
  ) { }
  getUserList(){
    return this.users
  }
  getUser(index: number): Users | undefined {
    return this.users.find((user: Users) => user.id === index);
  }
  addNewItemDetails(nameNew : string, emailNew : string, creationDateNew : string, isActiveNew : boolean ){
    let minAvailablePostId = 1;
    const usedPostIds = this.users.map((user) => user.id);
    while (usedPostIds.includes(minAvailablePostId)) {
      minAvailablePostId++;
    }
    this.users.push({
      id: minAvailablePostId,
      name: nameNew,
      email: emailNew,
      creation_date: creationDateNew,
      is_active: isActiveNew,
    })
  }
  removeItem(user : Users) {
    let userId = user.id
    const index = this.users.findIndex(item => item.id === userId);
    this.findUserPosts(user)
    if (this.users.length < 2) {
      alert("You cannot delete the last user.");
    } else if (this.isUserHasPost){
      alert("You cannot delete a user that has posts.");
    } else {
      this.users.splice(index, 1);
    }
  }
  editItem(item : Users, nameIn : string, emailIn : string, creationDateIn : string, isActiveIn : boolean){
    const i = item.id - 1
    this.users[i] = {
      id: i + 1,
      name: nameIn,
      email: emailIn,
      creation_date: creationDateIn,
      is_active: isActiveIn,
    }
  }
 /* findUserPostss(user : Users){
    const userPosts = this.posts.find((user)=> user.post_id == this.posts // here is the probleö. I want to get the post if there is a match from posts post.post_id)
    if(userPosts.length > 0){
      this.isUserHasPost = true
    }
  } */
  findUserPosts(user: Users) {
    const userPosts = this.posts.filter((post: Posts) => post.user_id === user.id);
    if (userPosts.length > 0) {
      this.isUserHasPost = true;
    } else {
      this.isUserHasPost = false;
    }
  }
}
