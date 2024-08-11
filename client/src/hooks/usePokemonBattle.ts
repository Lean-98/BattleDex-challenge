import { useState } from 'react';
import {
  getAllPokemons,
  getPokemonById,
  startBattle,
} from '../services/services/pokemonService';
import type { UsePokemonBattleReturn } from '../interfaces/hooks/usePokemonBattleReturn.interface';
import type { Pokemon, PokemonWinner } from '../interfaces/services';

export const usePokemonBattle = (): UsePokemonBattleReturn => {
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const [opponentPokemon, setOpponentPokemon] = useState<Pokemon | null>(null);
  const [battleResult, setBattleResult] = useState<PokemonWinner | null>(null);

  const handleSelectedPokemon = async (id: string) => {
    const pokemon = await getPokemonById(id);

    setSelectedPokemon(pokemon);
    setOpponentPokemon(null); // Resetear el oponente cuando se selecciona un nuevo pokemon
  };

  const handleRandomOpponent = async (selectedId: string) => {
    const allPokemons = await getAllPokemons();

    // Filtrar para excluir el pokemon seleccionado por el usuario
    const availableOpponents = allPokemons.data.filter(
      (pokemon) => pokemon.id !== selectedId,
    );

    // Seleccionar un oponente de forma aleatoria
    const randomIndex = Math.floor(Math.random() * availableOpponents.length);
    const opponent = availableOpponents[randomIndex];

    // console.log(opponent);
    setOpponentPokemon(opponent);
    return opponent;
  };

  const handleStartBattle = async () => {
    if (selectedPokemon) {
      // Escoger automáticamente y aleatoriamente un contrincante diferente
      const opponent = await handleRandomOpponent(selectedPokemon.id);

      // Iniciar la batalla usando el id del oponente recién obtenido
      const { pokemonWinner } = await startBattle(
        selectedPokemon.id,
        opponent.id,
      );
      setBattleResult(pokemonWinner); // Actualizada el resultado de la batalla
    }
  };

  return {
    handleSelectedPokemon,
    handleStartBattle,
    battleResult,
    selectedPokemon,
    opponentPokemon,
  };
};
