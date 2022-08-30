import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/shared/enums/color.enum';

@Component({
  selector: 'example-ng-if',
  templateUrl: './example-ng-if.component.html',
  styleUrls: ['./example-ng-if.component.scss']
})
export class ExampleNgIfComponent implements OnInit {
  Color = Color;
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
