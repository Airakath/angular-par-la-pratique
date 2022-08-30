import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'example-ng-model',
  templateUrl: './example-ng-model.component.html',
  styleUrls: ['./example-ng-model.component.scss']
})
export class ExampleNgModelComponent implements OnInit {

  value?: string;

  constructor() { }

  ngOnInit(): void {
    this.value = '';
  }

}
