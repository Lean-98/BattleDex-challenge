import type { Pokemon, PokemonWinner } from '../services';

export interface UsePokemonBattleReturn {
  selectedPokemon: Pokemon | null;
  opponentPokemon: Pokemon | null;
  battleResult: PokemonWinner | null;
  handleSelectedPokemon: (id: string) => Promise<void>;
  handleStartBattle: () => Promise<void>;
}
