import { Component, OnInit } from '@angular/core';

enum Color {
  on = 'green',
  off = 'red'
}


@Component({
  selector: 'example-ng-style',
  templateUrl: './example-ng-style.component.html',
  styleUrls: ['./example-ng-style.component.scss']
})
export class ExampleNgStyleComponent implements OnInit {
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
