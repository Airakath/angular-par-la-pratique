import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './views/home/home.component';
import { MaterialModule } from 'src/app/material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ExampleNgStyleComponent } from './components/example-ng-style/example-ng-style.component';
import { ExampleNgClassComponent } from './components/example-ng-class/example-ng-class.component';
import { ExampleNgIfComponent } from './components/example-ng-if/example-ng-if.component';
import { ExampleNgForComponent } from './components/example-ng-for/example-ng-for.component';
import { ExampleNgSwitchComponent } from './components/example-ng-switch/example-ng-switch.component';
import { ExampleNgModelComponent } from './components/example-ng-model/example-ng-model.component';


@NgModule({
  declarations: [
    HomeComponent,
    ExampleNgStyleComponent,
    ExampleNgClassComponent,
    ExampleNgIfComponent,
    ExampleNgForComponent,
    ExampleNgSwitchComponent,
    ExampleNgModelComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class HomeModule { }
