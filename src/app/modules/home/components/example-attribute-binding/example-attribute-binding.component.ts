import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'example-attribute-binding',
  templateUrl: './example-attribute-binding.component.html',
  styleUrls: ['./example-attribute-binding.component.scss']
})
export class ExampleAttributeBindingComponent implements OnInit {
  link?: string;

  constructor() { }

  ngOnInit(): void {
    this.link = 'https://discord.gg/fVsZbVWjSv';
  }

}
