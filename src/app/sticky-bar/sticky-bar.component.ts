import { Component, OnInit, HostListener, ContentChild, AfterContentInit } from '@angular/core';
import { BarButtonComponent } from '../bar-button/bar-button.component';

@Component({
  selector: 'app-sticky-bar',
  templateUrl: './sticky-bar.component.html',
  styleUrls: ['./sticky-bar.component.scss']
})
export class StickyBarComponent implements OnInit, AfterContentInit {
  
  @ContentChild(BarButtonComponent) barButton:BarButtonComponent;
  public isSticky = false;
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    console.log(this.barButton);
  }

  @HostListener('window:scroll', ['$event'])
  private handleScroll($event: Event) {
    if (($event.target as HTMLElement).children[0].scrollTop > 20 && !this.isSticky) {
      this.isSticky = true;
    } else if (($event.target as HTMLElement).children[0].scrollTop <= 20 && this.isSticky) {
      this.isSticky = false;
    }
  }

}
