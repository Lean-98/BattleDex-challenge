import { useEffect, useState } from 'react';
import { getFilteredPokemons } from '../services/services/pokemonService';
import type { Pokemon } from '../interfaces/services';

export const usePokemons = (limit: number, offset: number) => {
  const [pokemons, setpokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await getFilteredPokemons(limit, offset);
        // console.log(response.data);
        setpokemons(response.data);
        setLoading(true);
      } catch (error) {
        console.log(error);
        setError('Error obtaining Pokemons');
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, [limit, offset]);

  return { pokemons, loading, error };
};
