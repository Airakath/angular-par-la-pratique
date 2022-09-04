import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
  routeSub?: Subscription;
  publicationId?: string;

  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getParams();
  }

  getParams(): void {
    this.routeSub = this.activatedRoute.params.subscribe(params => {
      this.publicationId = params['id'];
    });
  }
}
