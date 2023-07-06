import { Component } from '@angular/core';
import { Users } from '../users';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {
  userItem? : Users;
  constructor(
    private route: ActivatedRoute,
    private usersService : UsersService
    ){
    const params = this.route.snapshot.params
    const userItemId = Number(params['id']); 
    this.userItem = this.usersService.getUser(userItemId)
  }

  navigateToUserPage(){
    this.usersService.navigateToUserPage()
  }
}

