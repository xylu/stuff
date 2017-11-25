import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor() {
  }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.selectedRecipe = recipe;
    console.log('Selected recipe:%O', this.selectedRecipe);

  }


}
