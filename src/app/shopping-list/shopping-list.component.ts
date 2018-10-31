import { Component, OnInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  firstMessage: string;

  ngOnInit(): void {
    console.log('ShoppingListComponent Init');
    this.firstMessage = 'First Message on ShoppingListComponent';
  }

  ngOnDestroy(): void {
  }
}
