
# Angular Blog Management System

This project aims to create a simple blog management system using Angular. In this system, you will be able to manage data such as users, posts, categories, and comments.

Code Link: ***https://github.com/hburaks/blog-admin-app***
Project Link: ***https://blog-admin-app.vercel.app***

## Models

The project is based on the following models:

### User
- userId
- username
- email
- creationDate
- isActive

### Post
- postId
- userId
- categoryId
- title
- content
- viewCount
- creationDate
- isPublished

### Category
- categoryId
- name
- creationDate

### Comment
- commentId
- postId
- userId
- comment
- creationDate
- isConfirmed

## Application Structure and Pages

The application should include the following pages:

1. User List: A page that lists all the users.
2. Add New User: A form page for adding a new user.
3. Edit User: A form page for editing an existing user.
4. Post List: A page that lists all the posts.
5. Post Details: A page that shows the details of a post, including related information such as the user, category, and comments.
6. Add New Post: A form page for adding a new post.
7. Edit Post: A form page for editing an existing post.
8. Category List: A page that lists all the categories.
9. Category Details: A page that shows the details of a category, including the number of posts in that category. A router link that opens the list of posts for the selected category should be added.
10. Comment List: A page that lists all the comments.
11. Add New Comment: A form page for adding a new comment.

## Requirements and Features

- From the user list, there should be a redirection to the "Add New User" page for adding a new user. Existing users should be editable and deletable.
- To delete a user, there should be no associated posts or comments for that user. Also, the last remaining user in the application should not be deletable, and a warning should be displayed.
- The post list should not display the content of the posts. The content should be shown on the "Post Details" page. The "Post Details" page should also list the user information, category information, and comments associated with the post.
- Filters can be added to the post list based on userId, postId, and categoryId. The filters can be added to the end of the address using query params and the routing structure. For example: `?userId=1&postId=2&categoryId=3`.
- Posts should be editable and deletable. New posts should be able to be added. The user information and category information for the post can be obtained using select elements.
- A post should not be deletable if it has associated comments, and a warning should be displayed.
- The category list should list the categories, and the category details page can display the number of posts in that category. If filters are applied as mentioned in item 5, a router link that opens the list of posts for the selected category should be added for bonus points.
- New categories can be added, and existing categories can be edited.
- The comment list should list the comments. If filtering by postId is added, extra points will be awarded. The comment details page, add new comment page, and delete functionality should be included.
- Pagination should be implemented on all listing pages.
- Reusability of components is important. Input and Output usage should be preferred.
- Services should be created and injected into components.
- *ngIf, *ngFor, [(ngModel)], and other directives should be used in the HTML template code.
- Pipes can be used for displaying data on the page.
- JavaScript functions such as map, filter, find, etc. can be used to manipulate data.
- It is not important for the added, edited, or deleted data to persist when the page is reloaded. It is only important to achieve the desired data display after the initial load.

## Project Structure

The project should include the following services:

- UserService
- PostService
- CategoryService
- CommentService

These services can define the data lists as mock JavaScript object arrays or fetch the data from a backend service using HttpClientModule.

## Installation

1. Download or clone the project to your computer.
2. Open the terminal and navigate to the project directory.
3. Run the following command to install the necessary dependencies:
``` npm install ```
4. Run the following command to start the project:
``` ng serve ```
5. Open your browser and navigate to `http://localhost:4200/` to view the application.

## Conclusion

In this project, it is aimed to create a simple blog management system using Angular. Also described the requirements and features for each page and functionality. The project structure and services should also meet the specified requirements. 