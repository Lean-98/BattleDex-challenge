export interface PokemonInterface {
  id: string;
  name: string;
  attack: number;
  defense: number;
  hp: number;
  speed: number;
  type: string;
  imageUrl: string;
}

export interface Pokemon {
  id: string;
  name: string;
  hp: number;
  attack: number;
  defense: number;
  speed: number;
  imageUrl: string;
  categories: {
    id: string;
    name: string;
  }[];
}
