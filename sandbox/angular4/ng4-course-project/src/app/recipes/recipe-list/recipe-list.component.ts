import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Rosol', 'Chicken soup', 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Broth.jpg'),
    new Recipe('Rosol2', 'Chicken soup2', './assets/rosol.jpg')
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
