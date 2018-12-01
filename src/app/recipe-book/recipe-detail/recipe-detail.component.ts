import {Component, Input, OnInit} from '@angular/core';
import {IRecipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe: IRecipe;

  constructor(
  ) { }

  ngOnInit() {
  }

}
