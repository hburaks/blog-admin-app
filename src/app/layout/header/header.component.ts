import { Component, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{
  
  @Output('isSideBar') isSideBar : boolean = false;

  navigateToGitHub() {
    window.open("https://github.com/hburaks/blog-admin-app", "_blank");
  }

  toggleIsSideBar(){
    this.isSideBar = !this.isSideBar;
  }
  
  
}
