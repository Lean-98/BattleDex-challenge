import { Grid } from '@mui/material';
import {
  PokemonGrid,
  PokemonsBattleGrid,
  SubTitle,
  Title,
} from '../../components';
import { usePokemonBattle } from '../../hooks/usePokemonBattle';

export const HomePage = () => {
  const {
    battleResult,
    handleSelectedPokemon,
    handleStartBattle,
    opponentPokemon,
    selectedPokemon,
  } = usePokemonBattle();

  return (
    <Grid
      container
      direction="column"
      spacing={2} // espaceado entre componentes
      sx={{
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
        paddingTop: '20px',
        paddingX: '80px',
      }}
    >
      {/* Section SelectPokemon */}
      <Grid item xs={12} sx={{ marginY: '1rem' }}>
        <Title text="Battle of Pokemon" />
        <SubTitle text="Select your pokemon" />
        <PokemonGrid handleSelectedPokemon={handleSelectedPokemon} />
      </Grid>
      {/* End Section SelectPokemon */}

      {/* Section Pokemons Battle - Stats */}
      <Grid item>
        <PokemonsBattleGrid
          selectedPokemon={selectedPokemon}
          opponentPokemon={opponentPokemon}
          handleStartBattle={handleStartBattle}
          battleResult={battleResult}
        />
      </Grid>
      {/* End Section Pokemons Battle - Stats */}
    </Grid>
  );
};
