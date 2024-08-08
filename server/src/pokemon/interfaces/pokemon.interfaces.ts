import type { CategoryType } from './category.interfaces';

export interface PokemonInterface {
  id: string;
  name: string;
  attack: number;
  defense: number;
  hp: number;
  speed: number;
  imageUrl: string;
  categories: CategoryType[];
}

export interface PokemonBattle {
  id: string;
  name?: string;
  speed: number;
  attack: number;
  defense: number;
}
