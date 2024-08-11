import axios, { type AxiosResponse } from 'axios';
import { handleAxiosError } from '../helpers/handleAxiosError';
import type {
  BattleResponse,
  Pokemon,
  PokemonsResponse,
} from '../../interfaces/services';

const API_URL = 'http://localhost:3000/api';

// Fn para obtener todos los Pokemons con filtros
export const getFilteredPokemons = async (
  limit: number = 5,
  offset: number = 0,
): Promise<PokemonsResponse> => {
  try {
    const response: AxiosResponse<PokemonsResponse> = await axios.get(
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
): Promise<PokemonsResponse> => {
  try {
    const response: AxiosResponse<PokemonsResponse> = await axios.get(
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
  selectedPokemon: string,
  opponentPokemon: string,
): Promise<BattleResponse> => {
  try {
    const response: AxiosResponse<BattleResponse> = await axios.post(
      `${API_URL}/battle`,
      {
        selectedPokemon,
        opponentPokemon,
      },
    );
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};
