import type { PokemonBattle } from '../interfaces/battle.interface';

export const determineFirstAttacker = (
  pokemonOne: PokemonBattle,
  pokemonTwo: PokemonBattle,
) => {
  // Determina el primer atacante por speed o en el caso de igualdad por attack
  if (pokemonOne.speed > pokemonTwo.speed) {
    return pokemonOne;
  } else if (pokemonTwo.speed > pokemonOne.speed) {
    return pokemonTwo;
  } else {
    return pokemonOne.attack > pokemonTwo.attack ? pokemonOne : pokemonTwo;
  }
};
