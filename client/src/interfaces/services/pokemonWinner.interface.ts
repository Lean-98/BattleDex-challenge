export interface PokemonWinner {
  id: string;
  name: string;
  attack: number;
  defense: number;
  hp: number;
  speed: number;
  imageUrl: string;
}

export interface BattleResponse {
  pokemonWinner: PokemonWinner;
  message: string;
}
