import {
  Alert,
  AlertTitle,
  CircularProgress,
  Grid,
  Pagination,
} from '@mui/material';
import { PokemonCard } from '../pokemonCard/PokemonCard';
// import { pokemonMockData } from '../../../mock/pokemonMockData';
import { usePokemons } from '../../../hooks/usePokemons';
import { usePokemonPagination } from '../../../hooks/usePokemonPagination';
import { usePokemonBattle } from '../../../hooks/usePokemonBattle';

export const PokemonGrid = () => {
  const { page, limit, offset, handleChangePage } = usePokemonPagination();
  const { pokemons, loading, error } = usePokemons(limit, offset);
  const { handleSelectedPokemon } = usePokemonBattle();

  if (loading)
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CircularProgress />
      </div>
    );
  if (error)
    return (
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        {error}
      </Alert>
    );

  return (
    <>
      <Grid container>
        {pokemons.map(({ id, name, imageUrl }) => (
          <Grid key={id} item xs={12} sm={6} md={4} lg={3} xl={2}>
            <PokemonCard
              name={name}
              image={imageUrl}
              onClick={() => {
                handleSelectedPokemon(id);
                console.log(id);
              }}
            />
          </Grid>
        ))}
      </Grid>
      {/* Pagination */}
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}
      >
        <Pagination
          count={5}
          page={page + 1}
          onChange={handleChangePage}
          color="primary"
        />
      </div>
    </>
  );
};
