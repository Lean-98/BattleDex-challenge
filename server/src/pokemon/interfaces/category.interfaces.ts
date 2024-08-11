export enum CategoryType {
  normal = 'normal',
  fire = 'fire',
  water = 'water',
  grass = 'grass',
  electric = 'electric',
  ice = 'ice',
  fighting = 'fighting',
  poison = 'poison',
  ground = 'ground',
  flying = 'flying',
  psychic = 'psychic',
  bug = 'bug',
  rock = 'rock',
  ghost = 'ghost',
  steel = 'steel',
  dragon = 'dragon',
  dark = 'dark',
  fairy = 'fairy',
}

export interface CategoryInterface {
  id: string;
  name: string;
}
