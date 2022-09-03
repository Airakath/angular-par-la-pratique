import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/core/material/material.module';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './views/blog/blog.component';
import { BlogDetailComponent } from './views/blog-detail/blog-detail.component';


@NgModule({
  declarations: [
    BlogComponent,
    BlogDetailComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    MaterialModule
  ]
})
export class BlogModule { }
