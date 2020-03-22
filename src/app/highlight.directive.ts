import { Directive, Input, OnChanges, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnChanges{
  
  @Input('appHighlight') isHighlight:boolean = false;
  constructor(private element:ElementRef) { }

  ngOnChanges() {
    if (this.isHighlight) {
      this.element.nativeElement.childNodes[0].style.backgroundColor = '#ffd498';
    } else {
      this.element.nativeElement.childNodes[0].style.backgroundColor = '';
    }
  }

}
