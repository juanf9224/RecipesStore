import { Component, OnInit, OnDestroy} from '@angular/core';
import {IRecipe} from './recipe.model';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent implements OnInit, OnDestroy {

  firstMessage: string;
  recipeDetail: IRecipe;

  ngOnInit(): void {
    console.log('RecipeBookComponent Init');
    this.firstMessage = 'First Message on RecipeBookComponent';
  }

  ngOnDestroy(): void {
  }

  setRecipeDetail(recipeDetail: IRecipe) {
    this.recipeDetail = recipeDetail;
  }
}
