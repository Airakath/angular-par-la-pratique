import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'example-event-binding',
  templateUrl: './example-event-binding.component.html',
  styleUrls: ['./example-event-binding.component.scss']
})
export class ExampleEventBindingComponent implements OnInit {

  counter: number;

  constructor() { 
    this.counter = 0;
  }

  ngOnInit(): void {

  }

  increment() {
    this.counter++;
  }

}
