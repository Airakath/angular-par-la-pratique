import { Component, OnInit } from '@angular/core';

enum Color {
  on = 'green',
  off = 'red'
}
@Component({
  selector: 'exmple-ng-style',
  templateUrl: './exmple-ng-style.component.html',
  styleUrls: ['./exmple-ng-style.component.scss']
})
export class ExmpleNgStyleComponent implements OnInit {
  color?: string;

  constructor() { }

  ngOnInit(): void {
    this.color = Color.on;
  }

  switchColor(): void {
    this.color = this.color == Color.off 
      ? Color.on 
      : Color.off;
      
    console.log('color :', this.color);
  }

}
