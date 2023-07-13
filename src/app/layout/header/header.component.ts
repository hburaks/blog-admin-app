import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ComponentService } from 'src/app/component.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy{
  
  isSideBar?:boolean = true;
  subscription?: Subscription;

  constructor(private componentService: ComponentService) { }

  ngOnInit() {
    this.subscription = this.componentService.currentMessage.subscribe(isSideBar => this.isSideBar = isSideBar)
  }
  
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
  newMessage() {
    this.componentService.changeMessage(!this.isSideBar)
  }


  navigateToGitHub() {
    window.open("https://github.com/hburaks/blog-admin-app", "_blank");
  }

  toggleIsSideBar(){
    console.log("toggle button clicked")
  }
  
}


