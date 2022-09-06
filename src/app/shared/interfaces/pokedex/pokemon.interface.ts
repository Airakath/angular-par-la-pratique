import { IPokemonSpecies } from "./pokemon-specie.interface";

export interface IPokemon {
    entry_number: number;
    pokemon_species: IPokemonSpecies;
}
