import {Directive, ElementRef, Injectable, OnInit} from '@angular/core';

@Injectable({providedIn: 'root'})
@Directive({
  selector: '[appBasicHighLight]',
})
export class BasicHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement.style.backgrounColor = 'green';
  }
}
