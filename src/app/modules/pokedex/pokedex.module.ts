import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokedexRoutingModule } from './pokedex-routing.module';
import { PokedexComponent } from './views/pokedex/pokedex.component';
import { PokedexDetailComponent } from './views/pokedex-detail/pokedex-detail.component';
import { MaterialModule } from 'src/app/core/material/material.module';


@NgModule({
  declarations: [
    PokedexComponent,
    PokedexDetailComponent
  ],
  imports: [
    CommonModule,
    PokedexRoutingModule,
    MaterialModule
  ]
})
export class PokedexModule { }
