import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  isSideBar : boolean = false;
  isSideBarSubscription : Subscription | undefined;

  navigateToGitHub() {
    window.open("https://github.com/hburaks/blog-admin-app", "_blank");
  }

  toggleIsSideBar(){
    this.isSideBar = !this.isSideBar;
  }
  ngOnInit(): void {
    
  }
  
}
