import { Grid } from '@mui/material';
import { PokemonCard } from '../pokemonCard/PokemonCard';
import { pokemonMockData } from '../../../mock/pokemonMockData';

export const PokemonGrid = () => {
  return (
    <Grid container>
      {pokemonMockData.map(({ id, name, imageUrl }) => (
        <Grid key={id} item xs={12} sm={6} md={4} lg={3} xl={2}>
          <PokemonCard name={name} image={imageUrl} />
        </Grid>
      ))}
    </Grid>
  );
};
