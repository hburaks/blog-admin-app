import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html', 
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  constructor(){

    setTimeout(() => {
      console.log("Hi it took 5 sec")
    }, 5000);

  }

}
