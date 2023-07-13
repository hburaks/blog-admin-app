import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ComponentService } from './component.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isSideBar?:boolean;
  subscription?: Subscription;

  constructor(private componentService: ComponentService) { }

  ngOnInit() {
    this.subscription = this.componentService.currentMessage.subscribe(isSideBar => this.isSideBar = isSideBar)
  }
  
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
