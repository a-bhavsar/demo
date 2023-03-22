import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[] = [
    new Recipe('Fruit Salad', "This is a fruit Salad", "https://i.ytimg.com/vi/xffXCJM_rvU/maxresdefault.jpg"),
    new Recipe('Potato Wedges', "This are Potato Wedges", "https://www.shutterstock.com/image-photo/fried-potato-wedges-white-sauce-260nw-121911745.jpg")

  ];

  @Output() recipe = new EventEmitter<Recipe>();
  constructor(){

  }
  ngOnInit(){

  }

  onRecipeSelected(recipe : Recipe){
    this.recipe.emit(recipe);
  }

}
