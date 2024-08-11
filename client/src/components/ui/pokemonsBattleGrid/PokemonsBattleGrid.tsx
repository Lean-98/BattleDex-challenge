import { Box, Grid } from '@mui/material';
import { ButtonBattle } from '../button/ButtonBattle';
import { PokemonStats } from '../pokemonStats/PokemonStats';
import { OpponentPokemonStats } from '../opponentPokemonStats/OpponentPokemonStats';
import { VictoryMessage } from '../victoryMessage/VictoryMessage';
import type { PokemonsBattleGridProps } from '../../../interfaces/components';

export const PokemonsBattleGrid: React.FC<PokemonsBattleGridProps> = ({
  selectedPokemon,
  opponentPokemon,
  handleStartBattle,
  battleResult,
}) => {
  return (
    <Box sx={{ textAlign: 'center', padding: '20px' }}>
      {/* VictoryMessage */}
      {battleResult && <VictoryMessage winner={battleResult} />}
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
            id={selectedPokemon?.id || 'd4e2f47d-cc34-4f9a-9b22-1fdc6d8722f3'}
            name={selectedPokemon?.name || 'Pikachu'}
            image={
              selectedPokemon?.imageUrl ||
              'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png'
            }
            hp={selectedPokemon?.hp || 35}
            attack={selectedPokemon?.attack || 55}
            defense={selectedPokemon?.defense || 40}
            speed={selectedPokemon?.speed || 90}
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
            onClick={handleStartBattle}
          />
        </Grid>
        {/* Opponent Pokemon */}
        <Grid item xs={12} xl={4}>
          <OpponentPokemonStats
            id={opponentPokemon?.id || 'd82c9d22-d4e5-4036-b342-4b927bf5b6e5'}
            name={opponentPokemon?.name || 'Eevee'}
            image={
              opponentPokemon?.imageUrl ||
              'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/133.png'
            }
            hp={opponentPokemon?.hp || 55}
            attack={opponentPokemon?.attack || 55}
            defense={opponentPokemon?.defense || 50}
            speed={opponentPokemon?.speed || 55}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
