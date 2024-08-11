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

export interface PokemonsResponse {
  data: Pokemon[];
  total: number;
  limit: number;
  offset: number;
}
