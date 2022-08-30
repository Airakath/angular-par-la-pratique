import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/shared/enums/color.enum';

@Component({
  selector: 'example-ng-style',
  templateUrl: './example-ng-style.component.html',
  styleUrls: ['./example-ng-style.component.scss']
})
export class ExampleNgStyleComponent implements OnInit {
  Color?: Color;
  color?: string;

  constructor() { }

  ngOnInit(): void {
    this.color = Color.on;
  }

  switchColor(): void {
    this.color = this.color == Color.off
      ? Color.on
      : Color.off;

    console.log('NgStyle color :', this.color);
  }

}
