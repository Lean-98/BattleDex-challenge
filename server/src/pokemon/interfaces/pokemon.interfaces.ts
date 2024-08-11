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
