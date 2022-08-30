import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'example-ng-class',
  templateUrl: './example-ng-class.component.html',
  styleUrls: ['./example-ng-class.component.scss']
})
export class ExampleNgClassComponent implements OnInit {
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
