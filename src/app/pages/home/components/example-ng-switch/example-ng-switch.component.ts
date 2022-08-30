import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';

enum Color {
  on = 'green',
  warning = 'orange',
  off = 'red'
}

enum StatusValue {
  on = 'on',
  warning = 'warning',
  off = 'off'
}

interface Status {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'example-ng-switch',
  templateUrl: './example-ng-switch.component.html',
  styleUrls: ['./example-ng-switch.component.scss']
})
export class ExampleNgSwitchComponent implements OnInit {

  statuses: Status[] = [
    { value: Color.on, viewValue: StatusValue.on },
    { value: Color.warning, viewValue: StatusValue.warning },
    { value: Color.off, viewValue: StatusValue.off },
  ];

  selectedValue?: string;

  constructor() { }

  ngOnInit(): void {

  }

  selectedStatus(event: MatSelectChange): void {
    const value = event.value;
    this.selectedValue = value;
    console.log(value);
    

  }

}
