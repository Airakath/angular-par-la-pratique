import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exemple-ng-class',
  templateUrl: './exemple-ng-class.component.html',
  styleUrls: ['./exemple-ng-class.component.scss']
})
export class ExempleNgClassComponent implements OnInit {

  color?: boolean;

  constructor() { }

  ngOnInit(): void {
    this.color = true;
  }

  switchColor(): void {
    this.color = !this.color;
    console.log('ngClass color :', this.color);
  }

}
