import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  private messageSource = new BehaviorSubject(false);
  currentMessage = this.messageSource.asObservable();
  
  constructor() { }
  
  changeMessage(isSideBar: boolean) {
    this.messageSource.next(isSideBar)
  }
}




