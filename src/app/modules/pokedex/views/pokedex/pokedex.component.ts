import { Component, OnInit } from '@angular/core';
import { PokedexService } from 'src/app/core/services/pokedex.service';
import { tap, map } from 'rxjs';
import { IPokemon } from 'src/app/shared/interfaces/pokedex/pokemon.interface';


@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {
  name: string;
  pokemons?: IPokemon[];

  constructor(
    private pokedexService: PokedexService,
  ) {
    this.name = 'kanto';
  }

  ngOnInit(): void {
    this.populateData();
  }

  populateData() {
    this.pokedexService.readPokedex(this.name).pipe(
      map(pokedex => pokedex.pokemon_entries),
      map(pokemon_entries => pokemon_entries.map((el) => el))
    ).subscribe(pokemons => {
      this.pokemons = pokemons;
    })
  }
}
