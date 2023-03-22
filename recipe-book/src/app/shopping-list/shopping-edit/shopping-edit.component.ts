import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  @Output() newIngredient = new EventEmitter<Ingredient>()

  @ViewChild('ingredientName') ingName : ElementRef;
  @ViewChild('ingredientAmount') ingAmount : ElementRef;

  addIngredient(){
    const i= new Ingredient(this.ingName.nativeElement.value, this.ingAmount.nativeElement.value);
    console.log(i);
    this.newIngredient.emit(i);
  }
}
