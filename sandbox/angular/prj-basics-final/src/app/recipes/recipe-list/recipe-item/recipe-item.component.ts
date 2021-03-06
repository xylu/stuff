import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;

  @Output() recipeItemSelected = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit() {
  }

  onRecipeItemClick() {
    console.log('[Recipe Item] Clicked & event emitted!');
    this.recipeItemSelected.emit();
  }


}
