import { IDescription } from "./description.interface";
import { IName } from "./name.interface";
import { IPokemon } from "./pokemon.interface";
import { IRegion } from "./region.interface";
import { IVersionGroup } from "./version-group.interface";

export interface IPokedex {
    id: number,
    is_main_series: boolean,
    name: string,
    description: IDescription[];
    names: IName[],
    pokemon_entries: IPokemon[],
    region: IRegion,
    version_groups: IVersionGroup[],
}
