import axios, { type AxiosResponse } from 'axios';
import type { Pokemon } from '../../interfaces';
import { handleAxiosError } from '../helpers/handleAxiosError';

const API_URL = 'http://localhost:3000/api';

// Fn para obtener todos los Pokemons con filtros
export const getFilteredPokemons = async (
  limit: number = 5,
  offset: number = 0,
): Promise<Pokemon[]> => {
  try {
    const response: AxiosResponse<Pokemon[]> = await axios.get(
      `${API_URL}/pokemon`,
      {
        params: { limit, offset },
      },
    );
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};

// Fn para obtener todos los Pokemons
export const getAllPokemons = async (
  limit: number = 30,
  offset: number = 0,
): Promise<Pokemon[]> => {
  try {
    const response: AxiosResponse<Pokemon[]> = await axios.get(
      `${API_URL}/pokemon`,
      {
        params: { limit, offset },
      },
    );
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};

// Fn para obtener un Pokemon por ID
export const getPokemonById = async (id: string): Promise<Pokemon> => {
  try {
    const response: AxiosResponse<Pokemon> = await axios.get(
      `${API_URL}/pokemon/${id}`,
    );
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};

// Fn para iniciar una batalla entre Pokemons
export const startBattle = async (
  pokemonId: string,
  opponentId: string,
): Promise<{ winner: Pokemon }> => {
  try {
    const response: AxiosResponse<{ winner: Pokemon }> = await axios.post(
      `${API_URL}/battle`,
      {
        pokemonId,
        opponentId,
      },
    );
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};
