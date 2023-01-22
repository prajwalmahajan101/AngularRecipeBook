import { Component } from '@angular/core';
import { Ingredient } from 'src/shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients:Ingredient[] = [
    new Ingredient("flour",29),
    new Ingredient("flour",29),
    new Ingredient("flour",29),
    new Ingredient("flour",29),
  ];
  onIngredientAdded(ingredient:Ingredient){
    this.ingredients.push(ingredient);
  }
}
