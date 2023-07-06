import { Component } from '@angular/core';
import { Comments } from '../comments';
import { ActivatedRoute } from '@angular/router';
import { CommentsService } from '../comments.service';
import { UsersService } from '../../users/users.service';

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.scss']
})
export class CommentDetailsComponent {
  commentItem? : Comments;
  userName : String = "";
  categoryName : String = "";
  comments : Comments[] = this.commentsService.getCommentsList();

  constructor(
    private route: ActivatedRoute,
    private commentsService : CommentsService,
    private usersService : UsersService,
    ){
    const params = this.route.snapshot.params
    const commentItemId = Number(params['id']); 
    this.commentItem = this.commentsService.getComment(commentItemId)
    this.findUserName(commentItemId)
  }
  
  findUserName( comment_id : number){
    const comment = this.comments.find((p)=> p.comment_id === comment_id)
    if (comment) {
      const user_id = comment.user_id;
      const user = this.usersService.getUser(user_id);
      if (user) {
        this.userName = user.name;
      }
    }
  }
  navigateToCommentsPage() {
    this.commentsService.navigateToCommentsPage()
  }
}




  

  

  