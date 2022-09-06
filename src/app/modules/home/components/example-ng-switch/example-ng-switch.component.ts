import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Color } from 'src/app/shared/enums/color.enum';
import { StatusValue } from 'src/app/shared/enums/status-value.enum';
import { IStatus } from 'src/app/shared/interfaces/status/status.interface';

@Component({
  selector: 'example-ng-switch',
  templateUrl: './example-ng-switch.component.html',
  styleUrls: ['./example-ng-switch.component.scss']
})
export class ExampleNgSwitchComponent implements OnInit {
  Color = Color;
  StatusValue = StatusValue;

  statuses: IStatus[] = [
    { value: StatusValue.on },
    { value: StatusValue.warning },
    { value: StatusValue.off },
  ];

  selectedValue?: string;

  constructor() { }

  ngOnInit(): void {

  }

  selectedStatus(event: MatSelectChange): void {
    const value = event.value;
    this.selectedValue = value;
    console.log('NgSwitch selectedValue :', this.selectedValue);
  }

}
