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
