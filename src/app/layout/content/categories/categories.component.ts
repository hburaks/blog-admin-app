import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  categories : any[] = [{"category_id":1,"name":"Teknoloji","creation_date":"2000-06-15"}, 
  {"category_id":2,"name":"Spor","creation_date":"2000-06-15"}, 
  {"category_id":3,"name":"Müzik","creation_date":"2000-06-15"}, 
  {"category_id":4,"name":"Eğitim","creation_date":"2000-06-15"}, 
  {"category_id":5,"name":"Film","creation_date":"2000-06-15"}];

}
