import type { Pokemon } from './pokemon.interface';

export interface UsePokemonBattleReturn {
  selectedPokemon: Pokemon | null;
  opponentPokemon: Pokemon | null;
  battleResult: string | null;
  handleSelectedPokemon: (id: string) => Promise<void>;
  handleStartBattle: () => Promise<void>;
}
