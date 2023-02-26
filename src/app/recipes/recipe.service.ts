
import {EventEmitter, Injectable} from "@angular/core";
import { Recipe } from "./recipe.model";
import {Ingredient} from "../../shared/ingredients.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
@Injectable()
export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>();
  constructor(private slService:ShoppingListService) {}
  private recipes:Recipe[] = [
    new Recipe(
      "A Test Recipe 1",
      "This is a sample Test Recipe 1",
      "https://tinyurl.com/5n8sztka",
      [
        new Ingredient('Flour',2),
        new Ingredient('French Fires',20)
      ]
    ),
    new Recipe(
      "A Test Recipe 2",
      "This is a sample Test Recipe 2",
      "https://tinyurl.com/5n8sztka",
      [
        new Ingredient('Apples',2),
        new Ingredient('Milk',20)
      ]
    ),
    new Recipe(
      "A Test Recipe 3",
      "This is a sample Test Recipe 3",
      "https://tinyurl.com/5n8sztka",
      [
        new Ingredient('Mongo',2),
        new Ingredient('Sugar',20)
      ]
    ),
  ];
  getRecipes(){
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients:Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
}
