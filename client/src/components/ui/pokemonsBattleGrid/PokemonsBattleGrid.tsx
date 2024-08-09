import { Box, Grid } from '@mui/material';
import { ButtonBattle } from '../button/ButtonBattle';
import { PokemonStats } from '../pokemonStats/PokemonStats';
import { OpponentPokemonStats } from '../opponentPokemonStats/OpponentPokemonStats';
import { VictoryMessage } from '../victoryMessage/VictoryMessage';

export const PokemonsBattleGrid = () => {
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
          <PokemonStats
            id="pokemon-1"
            name="Pikachu"
            image="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png"
            hp={45}
            attack={60}
            defense={30}
            speed={90}
          />
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
          />
        </Grid>
        {/* Opponent Pokemon */}
        <Grid item xs={12} xl={4}>
          <OpponentPokemonStats
            id="pokemon-5"
            name="Eevee"
            image="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/133.png"
            hp={45}
            attack={30}
            defense={70}
            speed={30}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
