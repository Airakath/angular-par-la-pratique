import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from 'src/app/app-routing.module';


import { FooterComponent } from './views/footer/footer.component';


@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports: [
    FooterComponent
  ],  
})
export class FooterModule { }
