import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './views/home/home.component';
import { MaterialModule } from 'src/app/material/material.module';
import { ExampleNgStyleComponent } from './components/example-ng-style/example-ng-style.component';
import { ExampleNgClassComponent } from './components/example-ng-class/example-ng-class.component';
import { ExampleNgIfComponent } from './components/example-ng-if/example-ng-if.component';
import { ExampleNgForComponent } from './components/example-ng-for/example-ng-for.component';
import { ExampleNgNonBindableComponent } from './components/example-ng-non-bindable/example-ng-non-bindable.component';
import { ExampleNgSwitchComponent } from './components/example-ng-switch/example-ng-switch.component';


@NgModule({
  declarations: [
    HomeComponent,
    ExampleNgStyleComponent,
    ExampleNgClassComponent,
    ExampleNgIfComponent,
    ExampleNgForComponent,
    ExampleNgNonBindableComponent,
    ExampleNgSwitchComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ]
})
export class HomeModule { }
