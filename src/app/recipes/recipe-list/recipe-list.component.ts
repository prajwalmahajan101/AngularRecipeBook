import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
  @Output() recipeWasSelected  = new EventEmitter<Recipe>();
  recipes:Recipe[] = [
    new Recipe("A Test Recipe 1", "This is a sample Test Recipe 1","https://tinyurl.com/5n8sztka"),
    new Recipe("A Test Recipe 2", "This is a sample Test Recipe 2","https://tinyurl.com/5n8sztka"),
    new Recipe("A Test Recipe 3", "This is a sample Test Recipe 3","https://tinyurl.com/5n8sztka"),
    new Recipe("A Test Recipe 4", "This is a sample Test Recipe 4","https://tinyurl.com/5n8sztka")
  ];
  ngOnInit() {
  }

  onRecipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
