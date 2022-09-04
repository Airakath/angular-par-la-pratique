import { Directive, ElementRef } from '@angular/core';
import { Color } from '../enums/color.enum';

@Directive({
  selector: '[ColorOff]'
})
export class ColorOffDirective {
  Color?: Color;

  constructor(
    private elementRef: ElementRef
  ) {
    this.elementRef.nativeElement.style.backgroundColor = Color.off;
  }
}
