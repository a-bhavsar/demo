import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[] = [
    new Recipe('Fruit Salad', "This is a fruit Salad", "https://i.ytimg.com/vi/xffXCJM_rvU/maxresdefault.jpg"),
    new Recipe('Fruit Salad', "This is a fruit Salad", "https://i.ytimg.com/vi/xffXCJM_rvU/maxresdefault.jpg")

  ];
  constructor(){

  }
  ngOnInit(){

  }
}
