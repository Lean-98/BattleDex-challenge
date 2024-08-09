import { Grid } from '@mui/material';
import {
  PokemonGrid,
  PokemonsBattleGrid,
  SubTitle,
  Title,
} from '../../components';

export const HomePage = () => {
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
        <PokemonGrid />
      </Grid>
      {/* End Section SelectPokemon */}

      {/* Section Pokemons Battle - Stats */}
      <Grid item>
        <PokemonsBattleGrid />
      </Grid>
      {/* End Section Pokemons Battle - Stats */}
    </Grid>
  );
};
