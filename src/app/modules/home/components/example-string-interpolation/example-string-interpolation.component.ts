import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'example-string-interpolation',
  templateUrl: './example-string-interpolation.component.html',
  styleUrls: ['./example-string-interpolation.component.scss']
})
export class ExampleStringInterpolationComponent implements OnInit {
  title?: string;
  description?: string;

  constructor() { }

  ngOnInit(): void {
    this.title = "String Interpolation"
    this.description = `
    La string interpolation permet de faire référence dans 
    le template HTML à des propriété défini dans la class typescript
    Il suffit de mettre le nom de la propriété à afficher 
    entre doubles accolades {{ }} dans le template HTML`;
  }

}
