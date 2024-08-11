import type { Pokemon } from '../services';

export interface PokemonsBattleGridProps {
  selectedPokemon: Pokemon | null;
  opponentPokemon: Pokemon | null;
  handleStartBattle: () => void;
  battleResult: string | null;
}
