import {Component, OnInit, OnDestroy, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  @Output() featureSelected = new EventEmitter<string>();

  ngOnInit(): void {
    console.log('HeaderComponent Init');
  }

  ngOnDestroy(): void {
  }

  onSelect(route: string) {
    this.featureSelected.emit(route);
  }
}
