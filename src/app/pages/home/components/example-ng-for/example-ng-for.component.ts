import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'example-ng-for',
  templateUrl: './example-ng-for.component.html',
  styleUrls: ['./example-ng-for.component.scss']
})
export class ExampleNgForComponent implements OnInit {

  rows: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.createRow();
  }

  createRow(): void {
    for (let i = 0; i < 10; i++) {
      this.rows.push(`je suis la ligne numéro ${i}`);
    }
  }

  addRow(): void {
    this.rows.push(`je suis la ligne numéro ${this.rows.length}`);
    console.log('NgFor rows :', this.rows);
  }

  deleteLastRow(): void {
    this.rows.pop();
  }

}
