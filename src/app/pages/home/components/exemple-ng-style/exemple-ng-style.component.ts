import { Component, OnInit } from '@angular/core';

enum Color {
  on = 'green',
  off = 'red'
}

@Component({
  selector: 'exemple-ng-style',
  templateUrl: './exemple-ng-style.component.html',
  styleUrls: ['./exemple-ng-style.component.scss']
})
export class ExempleNgStyleComponent implements OnInit {
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
