import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()

export class RecipeService{

    recipeSelected = new EventEmitter<Recipe>();

    private recipes : Recipe[] = [
        new Recipe('Fruit Salad', "This is a fruit Salad", "https://i.ytimg.com/vi/xffXCJM_rvU/maxresdefault.jpg", [new Ingredient("Apples", 12),
        new Ingredient("Pomegrenate", 8)]),
        new Recipe('Potato Wedges', "This are Potato Wedges", "https://www.shutterstock.com/image-photo/fried-potato-wedges-white-sauce-260nw-121911745.jpg", [new Ingredient("Potato", 20),
        new Ingredient("Salt", 3)])
    ];

    constructor(private shoppingListService : ShoppingListService){

    }

    getRecipes(){
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients : Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }

    getRecipe(index : number){
        return this.recipes[index];
    }
}