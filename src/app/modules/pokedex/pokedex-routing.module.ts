import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokedexDetailComponent } from './views/pokedex-detail/pokedex-detail.component';
import { PokedexComponent } from './views/pokedex/pokedex.component';

const routes: Routes = [
  {
    path: '',
    component: PokedexComponent,
  },
  {
    path: ':id',
    component: PokedexDetailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokedexRoutingModule { }
