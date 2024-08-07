import { CategoryType, type PokemonInterface } from '../../pokemon/interfaces';

interface SeedData {
  pokemons: PokemonInterface[];
}

export const initialData: SeedData = {
  pokemons: [
    {
      id: 'd4e2f47d-cc34-4f9a-9b22-1fdc6d8722f3',
      name: 'Pikachu',
      attack: 55,
      defense: 40,
      hp: 35,
      speed: 90,
      imageUrl:
        'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png',
      categories: [CategoryType.electric],
    },
    {
      id: '036bb972-7fb3-4fe4-ac8f-31340103c8c3',
      name: 'Charmander',
      attack: 52,
      defense: 43,
      hp: 39,
      speed: 65,
      imageUrl:
        'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png',
      categories: [CategoryType.fire],
    },
    {
      id: '6b8f8bfc-83f3-4b1f-b2a5-91e2c7e8fdd6',
      name: 'Squirtle',
      attack: 48,
      defense: 65,
      hp: 44,
      speed: 43,
      imageUrl:
        'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png',
      categories: [CategoryType.water],
    },
    {
      id: 'fa3de6b1-9b36-4e4f-85c8-cff7d8dd2e89',
      name: 'Bulbasaur',
      attack: 49,
      defense: 49,
      hp: 45,
      speed: 45,
      imageUrl:
        'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png',
      categories: [CategoryType.grass, CategoryType.poison],
    },
    {
      id: '5e7f3bcb-cb6c-4d41-bb8c-7f8baddb9f54',
      name: 'Jigglypuff',
      attack: 45,
      defense: 20,
      hp: 115,
      speed: 20,
      imageUrl:
        'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/039.png',
      categories: [CategoryType.normal, CategoryType.fairy],
    },
    {
      id: '9d0e4e61-df5e-43fc-9a6b-6a636b535d1b',
      name: 'Gengar',
      attack: 65,
      defense: 60,
      hp: 60,
      speed: 110,
      imageUrl:
        'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/094.png',
      categories: [CategoryType.ghost, CategoryType.poison],
    },
    {
      id: 'ab0c897e-9f9d-4896-9e89-8f7a7c3fd9cb',
      name: 'Machop',
      attack: 80,
      defense: 50,
      hp: 70,
      speed: 35,
      imageUrl:
        'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/066.png',
      categories: [CategoryType.fighting],
    },
    {
      id: '3d595e6b-4a6f-4399-8f6a-2e6ff5f5d676',
      name: 'Gastly',
      attack: 35,
      defense: 30,
      hp: 30,
      speed: 80,
      imageUrl:
        'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/092.png',
      categories: [CategoryType.ghost, CategoryType.poison],
    },
    {
      id: '27c83e3d-0b89-40d6-b3da-c7f745f3f1f7',
      name: 'Onix',
      attack: 45,
      defense: 160,
      hp: 35,
      speed: 70,
      imageUrl:
        'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/095.png',
      categories: [CategoryType.rock, CategoryType.ground],
    },
    {
      id: 'b1b46c84-dbb7-44f0-845a-fc65b2e41778',
      name: 'Alakazam',
      attack: 50,
      defense: 45,
      hp: 55,
      speed: 120,
      imageUrl:
        'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/065.png',
      categories: [CategoryType.psychic],
    },
    {
      id: 'a5d9b58d-0751-4b2c-a5f0-3c54f73d04c6',
      name: 'Geodude',
      attack: 80,
      defense: 100,
      hp: 40,
      speed: 20,
      imageUrl:
        'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/074.png',
      categories: [CategoryType.rock, CategoryType.ground],
    },
    {
      id: 'a6e5d8e2-8b92-4f72-9e4e-df56d14ecf54',
      name: 'Exeggutor',
      attack: 95,
      defense: 85,
      hp: 95,
      speed: 55,
      imageUrl:
        'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/103.png',
      categories: [CategoryType.grass, CategoryType.psychic],
    },
    {
      id: '6e8c055f-7312-48a2-97d0-e70b0f5d1c92',
      name: 'Gyarados',
      attack: 125,
      defense: 79,
      hp: 95,
      speed: 81,
      imageUrl:
        'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/130.png',
      categories: [CategoryType.water, CategoryType.flying],
    },
    {
      id: '0290eeff-94e3-43e9-832a-a1ef6c4fed83',
      name: 'Arcanine',
      attack: 110,
      defense: 80,
      hp: 90,
      speed: 95,
      imageUrl:
        'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/059.png',
      categories: [CategoryType.fire],
    },
    {
      id: 'b0f624ec-8ff5-4c71-87d6-7de19a6c45b3',
      name: 'Vulpix',
      attack: 41,
      defense: 40,
      hp: 38,
      speed: 65,
      imageUrl:
        'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/037.png',
      categories: [CategoryType.fire],
    },
    {
      id: 'd82c9d22-d4e5-4036-b342-4b927bf5b6e5',
      name: 'Eevee',
      attack: 55,
      defense: 50,
      hp: 55,
      speed: 55,
      imageUrl:
        'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/133.png',
      categories: [CategoryType.normal],
    },
    {
      id: '0a1b2c3d-4e5f-6789-0a1b-2c3d4e5f6789',
      name: 'Jolteon',
      attack: 65,
      defense: 60,
      hp: 65,
      speed: 130,
      imageUrl:
        'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/135.png',
      categories: [CategoryType.electric],
    },
    {
      id: 'b6e1d004-789a-49d3-87a4-cf846cd3b4ab',
      name: 'Flareon',
      attack: 130,
      defense: 60,
      hp: 65,
      speed: 65,
      imageUrl:
        'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/136.png',
      categories: [CategoryType.fire],
    },
    {
      id: '78b8d3e2-5a23-45b6-8c2d-1a56b7bde3f4',
      name: 'Vaporeon',
      attack: 65,
      defense: 60,
      hp: 130,
      speed: 65,
      imageUrl:
        'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/134.png',
      categories: [CategoryType.water],
    },
    {
      id: '2d5c6d8e-17f2-42f0-9b36-8c7a3e2a7f80',
      name: 'Mewtwo',
      attack: 110,
      defense: 90,
      hp: 106,
      speed: 130,
      imageUrl:
        'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/150.png',
      categories: [CategoryType.psychic],
    },
    {
      id: 'be0e6f7d-8b94-4a4d-90d0-23c2b7b8e7f4',
      name: 'Dragonite',
      attack: 134,
      defense: 95,
      hp: 91,
      speed: 80,
      imageUrl:
        'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/149.png',
      categories: [CategoryType.dragon, CategoryType.flying],
    },
    {
      id: '1f7d2e0a-5d68-4d2e-9d7c-0e9f1b7a6c9e',
      name: 'Lapras',
      attack: 85,
      defense: 80,
      hp: 130,
      speed: 60,
      imageUrl:
        'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/131.png',
      categories: [CategoryType.water, CategoryType.ice],
    },
    {
      id: 'f2d4b3e6-5a12-43c9-9b2a-8e9f7d6c4e32',
      name: 'Ditto',
      attack: 48,
      defense: 48,
      hp: 48,
      speed: 48,
      imageUrl:
        'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/132.png',
      categories: [CategoryType.normal],
    },
    {
      id: 'a5b8c3d2-e4f1-49a0-9f4c-d8e7a9b6c8d0',
      name: 'Snorlax',
      attack: 110,
      defense: 65,
      hp: 160,
      speed: 30,
      imageUrl:
        'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/143.png',
      categories: [CategoryType.normal],
    },
    {
      id: '34d5e6f7-89a1-4b0c-9d2e-3a4b5c6d7e8f',
      name: 'Articuno',
      attack: 85,
      defense: 100,
      hp: 90,
      speed: 85,
      imageUrl:
        'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/144.png',
      categories: [CategoryType.ice, CategoryType.flying],
    },
    {
      id: '994aed7e-2a7b-4075-aa36-9cec8205a6a4',
      name: 'Zapdos',
      attack: 90,
      defense: 85,
      hp: 90,
      speed: 100,
      imageUrl:
        'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/145.png',
      categories: [CategoryType.electric, CategoryType.flying],
    },
    {
      id: '4f7d6b8e-9a1c-4d3e-2f0b-1a6b7c8d9e0f',
      name: 'Moltres',
      attack: 100,
      defense: 90,
      hp: 90,
      speed: 90,
      imageUrl:
        'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/146.png',
      categories: [CategoryType.fire, CategoryType.flying],
    },

    {
      id: '3c2b4e5d-1f7a-9c0e-8d3b-4e6f7a8b9c1d',
      name: 'Togepi',
      attack: 35,
      defense: 35,
      hp: 35,
      speed: 20,
      imageUrl:
        'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/175.png',
      categories: [CategoryType.normal, CategoryType.fairy],
    },
    {
      id: '7d8e9f0a-1b2c-3d4e-5f6a-7b8c9d0e1f2a',
      name: 'Larvitar',
      attack: 64,
      defense: 50,
      hp: 50,
      speed: 41,
      imageUrl:
        'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/246.png',
      categories: [CategoryType.rock, CategoryType.ground],
    },
    {
      id: '9f0a1b2c-3d4e-5f6a-7b8c-9d0e1f2a3b4c',
      name: 'Swablu',
      attack: 40,
      defense: 39,
      hp: 45,
      speed: 50,
      imageUrl:
        'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/333.png',
      categories: [CategoryType.normal, CategoryType.flying],
    },
  ],
};
