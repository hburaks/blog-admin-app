import { Injectable } from '@angular/core';
import { Categories } from './categories';
import { PostsService } from '../posts/posts.service';
import { Posts } from '../posts/posts';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  categories : Categories[] = [
    {
      category_id: 1,
      name: "Teknoloji",
      creation_date: "2000-06-15"
    },
    {
      category_id: 2,
      name: "Spor",
      creation_date: "2000-06-15"
    },
    {
      category_id: 3,
      name: "Müzik",
      creation_date: "2000-06-15"
    },
    {
      category_id: 4,
      name: "Eğitim",
      creation_date: "2000-06-15"
    },
    {
      category_id: 5,
      name: "Film",
      creation_date: "2000-06-15"
    }
  ];
  posts : Posts[] = this.postsService.getPostList();
  isCategoryHasPost : boolean = false;

  constructor(
    private postsService : PostsService
  ) {}
  getCategoryList(){
    return this.categories
  }
  getCategory(index: number): Categories | undefined {
    return this.categories.find((category: Categories) => category.category_id === index);
  }
  addNewItemDetails(nameNew : string, creationDateNew : string){
    let minAvailableCategoryId = 1;
    const usedCategoryIds = this.categories.map((category) => category.category_id);
    while (usedCategoryIds.includes(minAvailableCategoryId)) {
      minAvailableCategoryId++;
    }
    this.categories.push({
      category_id: minAvailableCategoryId,
      name: nameNew,
      creation_date: creationDateNew,
    })
  }
  editItem(item : Categories, nameIn : string, creationDateIn : string){
    const i = item.category_id - 1
    this.categories[i] = {
      category_id: i + 1,
      name: nameIn,
      creation_date: creationDateIn,
    }
  }
  findCategoryPosts(id : number) {
    const categoryPosts = this.posts.filter((post: Posts) => post.category_id === id);
    if(categoryPosts.length > 0){
      this.isCategoryHasPost = true
    } else {
      this.isCategoryHasPost = false
    }
    return categoryPosts.length
  }
  removeItem(category : Categories) {
    let categoryId = category.category_id
    const index = this.categories.findIndex(item => item.category_id === categoryId);
    this.findCategoryPosts(categoryId)
    if (this.categories.length < 2) {
      alert("You cannot delete the last category.");
    } else if (this.isCategoryHasPost){
      alert("You cannot delete a category that has posts.");
    } else {
      this.categories.splice(index, 1);
    }
  }
  matchCategoryIdWithName(id : number){
    for(let i = 0; i < this.categories.length; i++){
      if(this.categories[i].category_id == id){
        return this.categories[i].name;
      } 
    }
    return 0
  }
  
}
  
  
  
  
  
