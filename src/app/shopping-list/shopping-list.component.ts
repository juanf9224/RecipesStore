import { Component, OnInit, OnDestroy} from '@angular/core';
import {Ingredient} from '../shared/model/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 6)
  ];

  constructor() {}

  ngOnInit(): void {
    console.log('ShoppingListComponent Init');
  }

  ngOnDestroy(): void {
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
