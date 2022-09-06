import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokedexRoutingModule } from './pokedex-routing.module';
import { PokedexComponent } from './views/pokedex/pokedex.component';
import { PokedexDetailComponent } from './views/pokedex-detail/pokedex-detail.component';


@NgModule({
  declarations: [
    PokedexComponent,
    PokedexDetailComponent
  ],
  imports: [
    CommonModule,
    PokedexRoutingModule
  ]
})
export class PokedexModule { }
