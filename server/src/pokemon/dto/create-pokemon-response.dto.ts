import { ApiProperty } from '@nestjs/swagger';
import { CategoryType } from '../interfaces/category.interfaces';

class CategoryResponse {
  @ApiProperty({
    example: '546ca347-84e3-4148-9fd1-d2a308fd3b1e',
    description: 'Category ID',
  })
  id: string;

  @ApiProperty({
    example: 'electric',
    description: 'Category name',
  })
  name: CategoryType;
}

export class CreatePokemonResponseDto {
  @ApiProperty({
    example: '0290eeff-94e3-43e9-832a-a1ef6c4fed83',
    description: 'Pokemon ID',
  })
  id: string;

  @ApiProperty({
    example: 'Pikachu2',
    description: 'Name of the Pokemon',
  })
  name: string;

  @ApiProperty({
    example: 55,
    description: 'Attack points',
  })
  attack: number;

  @ApiProperty({
    example: 40,
    description: 'Defense points',
  })
  defense: number;

  @ApiProperty({
    example: 35,
    description: 'Health points',
  })
  hp: number;

  @ApiProperty({
    example: 90,
    description: 'Speed points',
  })
  speed: number;

  @ApiProperty({
    example:
      'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png',
    description: 'Pokemon image URL',
  })
  imageUrl: string;

  @ApiProperty({
    type: [CategoryResponse],
    description: 'Pokemon categories',
  })
  categories: CategoryResponse[];
}
