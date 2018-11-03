import { Component, OnInit } from '@angular/core';
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
      description: 'some recipe',
      imagePath: 'https://get.pxhere.com/photo/' +
        'dish-meal-food-produce-recipe-fish-breakfast-meat-pork-cuisine-steak-pork-chop-power-dishes-grilling-fried-food-604134.jpg'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
