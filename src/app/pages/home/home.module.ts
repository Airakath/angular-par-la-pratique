import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './views/home/home.component';
import { ExmpleNgStyleComponent } from './components/exmple-ng-style/exmple-ng-style.component';
import { ExmpleNgClassComponent } from './components/exmple-ng-class/exmple-ng-class.component';
import { ExmpleNgForComponent } from './components/exmple-ng-for/exmple-ng-for.component';
import { ExmpleNgIfComponent } from './components/exmple-ng-if/exmple-ng-if.component';
import { ExmpleNgSwitchComponent } from './components/exmple-ng-switch/exmple-ng-switch.component';
import { ExmpleNgNonBindableComponent } from './components/exmple-ng-non-bindable/exmple-ng-non-bindable.component';


@NgModule({
  declarations: [
    HomeComponent,
    ExmpleNgStyleComponent,
    ExmpleNgClassComponent,
    ExmpleNgForComponent,
    ExmpleNgIfComponent,
    ExmpleNgSwitchComponent,
    ExmpleNgNonBindableComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
