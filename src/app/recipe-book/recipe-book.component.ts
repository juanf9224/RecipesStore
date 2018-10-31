import { Component, OnInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent implements OnInit, OnDestroy {

  firstMessage: string;

  ngOnInit(): void {
    console.log('RecipeBookComponent Init');
    this.firstMessage = 'First Message on RecipeBookComponent';
  }

  ngOnDestroy(): void {
  }
}
