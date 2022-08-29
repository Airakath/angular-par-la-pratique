import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'example-ng-if',
  templateUrl: './example-ng-if.component.html',
  styleUrls: ['./example-ng-if.component.scss']
})
export class ExampleNgIfComponent implements OnInit {

  status?: boolean;

  constructor() { }

  ngOnInit(): void {
    this.status = true;
  }

  switchStatus(): void {
    this.status = !this.status;
    console.log('NgIf status :', this.status);
  }
}
