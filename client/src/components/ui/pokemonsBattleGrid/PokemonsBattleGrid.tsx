import { Box, Grid } from '@mui/material';
import { ButtonBattle } from '../button/ButtonBattle';
import { PokemonStats } from '../pokemonStats/PokemonStats';
import { OpponentPokemonStats } from '../opponentPokemonStats/OpponentPokemonStats';
import { VictoryMessage } from '../victoryMessage/VictoryMessage';
import { usePokemonBattle } from '../../../hooks/usePokemonBattle';

export const PokemonsBattleGrid = () => {
  const { selectedPokemon, opponentPokemon, handleStartBattle, battleResult } =
    usePokemonBattle();

  return (
    <Box sx={{ textAlign: 'center', padding: '20px' }}>
      {/* VictoryMessage */}
      <VictoryMessage winner="Pikachu" />
      {/* Sección de batalla */}
      <Grid
        container
        spacing={1}
        justifyContent="center"
        alignItems="center"
        item
      >
        {/* Pokemon Selected */}
        <Grid item xs={12} xl={4}>
          {selectedPokemon ? (
            <PokemonStats
              id={selectedPokemon.id}
              name={selectedPokemon.name}
              image={selectedPokemon.imageUrl}
              hp={selectedPokemon.hp}
              attack={selectedPokemon.attack}
              defense={selectedPokemon.defense}
              speed={selectedPokemon.speed}
            />
          ) : (
            // Código para mostrar el Pokémon por defecto
            <PokemonStats
              id="pokemon-1"
              name="Pikachu"
              image="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png"
              hp={45}
              attack={60}
              defense={30}
              speed={90}
            />
          )}
        </Grid>
        {/* Button of Battle */}
        <Grid
          item
          xs={12}
          xl={4}
          display="flex"
          justifyContent="center"
          sx={{ marginY: 2 }}
        >
          <ButtonBattle
            text="Start Battle"
            arialLabel="Start battle of pokemons"
            onClick={handleStartBattle}
          />
        </Grid>
        {/* Opponent Pokemon */}
        <Grid item xs={12} xl={4}>
          <OpponentPokemonStats
            id={opponentPokemon?.id || 'pokemon-5'}
            name={opponentPokemon?.name || 'Eevee'}
            image={
              opponentPokemon?.imageUrl ||
              'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/133.png'
            }
            hp={opponentPokemon?.hp || 45}
            attack={opponentPokemon?.attack || 30}
            defense={opponentPokemon?.defense || 70}
            speed={opponentPokemon?.speed || 30}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
