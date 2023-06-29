import { Component } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  navigateToGitHub() {
    window.open("https://github.com/hburaks/patikaodev02-angular", "_blank");
  }
}
