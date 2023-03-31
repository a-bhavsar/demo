import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject, Subscription } from 'rxjs';
import { LoggingService } from 'src/logging.service';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy{

  ingredients : Observable<{ingredients : Ingredient[]}>;
  igChange : Subscription;
  

  constructor(private shoppingListService : ShoppingListService, private loggingService :  LoggingService, private store : Store<{shoppingList : {ingredients : Ingredient[]}}>){

  }

  ngOnInit(){
    this.ingredients = this.store.select("shoppingList");
    // this.ingredients = this.shoppingListService.getIngredients();
    // this.igChange = this.shoppingListService.ingredientsChanged.subscribe((ingredients : Ingredient[])=> {
    //   this.ingredients = ingredients;
    // })
    // this.loggingService.printLog("Hello from Shopping List NgOnInit");
  }
  
  ngOnDestroy(){
    this.igChange.unsubscribe();
  }

  editIngredient(index : number){
    this.shoppingListService.startedEditing.next(index);
  }
}
