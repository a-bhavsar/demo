import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  constructor(private shoppingListService : ShoppingListService){

  }

  @ViewChild('ingredientName') ingName : ElementRef;
  @ViewChild('ingredientAmount') ingAmount : ElementRef;

  addIngredient(){
    const i= new Ingredient(this.ingName.nativeElement.value, this.ingAmount.nativeElement.value);
    console.log(i);
    this.shoppingListService.addIngredient(i);
  }
}
