import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './views/home/home.component';
import { MaterialModule } from 'src/app/core/material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ExampleNgStyleComponent } from './components/example-ng-style/example-ng-style.component';
import { ExampleNgClassComponent } from './components/example-ng-class/example-ng-class.component';
import { ExampleNgIfComponent } from './components/example-ng-if/example-ng-if.component';
import { ExampleNgForComponent } from './components/example-ng-for/example-ng-for.component';
import { ExampleNgSwitchComponent } from './components/example-ng-switch/example-ng-switch.component';
import { ExampleNgModelComponent } from './components/example-ng-model/example-ng-model.component';
import { ExamplePipeComponent } from './components/example-pipe/example-pipe.component';
import { PhoneNumberPipe } from './pipes/phone-number.pipe';
import { ExampleStringInterpolationComponent } from './components/example-string-interpolation/example-string-interpolation.component';
import { ExampleAttributeBindingComponent } from './components/example-attribute-binding/example-attribute-binding.component';
import { ExampleEventBindingComponent } from './components/example-event-binding/example-event-binding.component';


@NgModule({
  declarations: [
    HomeComponent,
    ExampleNgStyleComponent,
    ExampleNgClassComponent,
    ExampleNgIfComponent,
    ExampleNgForComponent,
    ExampleNgSwitchComponent,
    ExampleNgModelComponent,
    ExamplePipeComponent,
    PhoneNumberPipe,
    ExampleStringInterpolationComponent,
    ExampleAttributeBindingComponent,
    ExampleEventBindingComponent
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
