import type { Pokemon, PokemonWinner } from '../services';

export interface PokemonsBattleGridProps {
  selectedPokemon: Pokemon | null;
  opponentPokemon: Pokemon | null;
  handleStartBattle: () => void;
  battleResult: PokemonWinner | null;
}
