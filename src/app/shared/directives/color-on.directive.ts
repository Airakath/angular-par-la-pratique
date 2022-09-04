import { Directive, ElementRef } from '@angular/core';
import { Color } from '../enums/color.enum';

@Directive({
  selector: '[ColorOn]'
})
export class ColorOnDirective {
  Color?: Color;

  constructor(
    private elementRef: ElementRef
  ) { 
    this.elementRef.nativeElement.style.backgroundColor = Color.on;
  }

}
