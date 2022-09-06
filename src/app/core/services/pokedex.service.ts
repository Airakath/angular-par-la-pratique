import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPokedex } from 'src/app/shared/interfaces/pokedex/pokedex.interface';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor(private httpClient: HttpClient) {

  }

  public readPokedex(name: string): Observable<IPokedex> {
    return this.httpClient.get<IPokedex>(`${environment.pokeApiUrl}/pokedex/${name}`);
  }
}
