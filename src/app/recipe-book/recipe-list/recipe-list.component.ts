import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { IRecipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: IRecipe[] = [
    {
      name: 'recipe 1',
      description: 'some recipe 2',
      imagePath: 'assets/recipe-item/recipe-img.jpg'
    },
    {
      name: 'recipe 2',
      description: 'some recipe 2',
      imagePath: 'assets/recipe-item/recipe-img.jpg'
    },
    {
      name: 'recipe 3',
      description: 'some recipe 3',
      imagePath: 'assets/recipe-item/recipe-img.jpg'
    }
  ];
  @Output() showSelectedRecipeDetail = new EventEmitter<IRecipe>();

  constructor() { }

  ngOnInit() {
  }

  showRecipeDetail(recipe: IRecipe) {
    this.showSelectedRecipeDetail.emit(recipe);
  }

}
