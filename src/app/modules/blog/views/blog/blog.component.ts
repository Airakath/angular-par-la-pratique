import { Component, OnInit } from '@angular/core';
import { IPublication } from 'src/app/shared/interfaces/publication.interfacr';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  publications?: IPublication[] = [];

  constructor(
  ) {}

  ngOnInit(): void {
    this.createPublication();
  }

  createPublication(): void {
    for (let i = 1; i <= 10; i++) {
      const publication = {
        id: i,
        title: `publication ${i}`,
        description: `description ${i}`
      }

      this.publications?.push(publication);      
    }
  }
}
