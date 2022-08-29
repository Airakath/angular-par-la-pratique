import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './views/home/home.component';
import { MaterialModule } from 'src/app/material/material.module';
import { ExempleNgClassComponent } from './components/exemple-ng-class/exemple-ng-class.component';
import { ExempleNgForComponent } from './components/exemple-ng-for/exemple-ng-for.component';
import { ExempleNgIfComponent } from './components/exemple-ng-if/exemple-ng-if.component';
import { ExempleNgStyleComponent } from './components/exemple-ng-style/exemple-ng-style.component';
import { ExempleNgSwitchComponent } from './components/exemple-ng-switch/exemple-ng-switch.component';
import { ExempleNgNonBindableComponent } from './components/exemple-ng-non-bindable/exemple-ng-non-bindable.component';


@NgModule({
  declarations: [
    HomeComponent,
    ExempleNgClassComponent,
    ExempleNgForComponent,
    ExempleNgIfComponent,
    ExempleNgStyleComponent,
    ExempleNgSwitchComponent,
    ExempleNgNonBindableComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ]
})
export class HomeModule { }
