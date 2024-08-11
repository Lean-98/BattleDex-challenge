import { useState } from 'react';
import type { Pokemon } from '../interfaces';
import {
  getAllPokemons,
  getPokemonById,
  startBattle,
} from '../services/services/pokemonService';

export const usePokemonBattle = () => {
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const [opponentPokemon, setOpponentPokemon] = useState<Pokemon | null>(null);
  const [battleResult, setBattleResult] = useState<string | null>(null);

  const handleSelectedPokemon = async (id: string) => {
    const pokemon = await getPokemonById(id);
    console.log({ pokemon });
    setSelectedPokemon(pokemon);
    console.log('Selected Pokemon:', pokemon);
    setOpponentPokemon(null); // Resetear el oponente cuando se selecciona un nuevo pokemon
  };

  const handleRandomOpponent = async (selectedId: string) => {
    const allPokemons = await getAllPokemons();
    console.log('allPokemons:', allPokemons.data);

    // Filtrar para excluir el pokemon seleccionado por el user
    const availableOpponents = allPokemons.data.filter(
      (pokemon) => pokemon.id !== selectedId,
    );

    // Seleccionar un oponente de forma aleatoria
    const randomIndex = Math.floor(Math.random() * availableOpponents.length);

    const opponent = availableOpponents[randomIndex];
    console.log(opponent);
    setOpponentPokemon(opponent);
    return opponent;
  };

  const handleStartBattle = async () => {
    if (selectedPokemon) {
      // Escoger automáticamente y aleatoriamente un contrincante diferente
      const opponent = await handleRandomOpponent(selectedPokemon.id);
      if (opponent) {
        const { winner } = await startBattle(
          selectedPokemon.id,
          opponentPokemon.id,
        );
        setBattleResult(`${winner.name} Wins!`);
      }
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
