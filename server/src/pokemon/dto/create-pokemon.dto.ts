import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsString,
  MinLength,
} from 'class-validator';
import { CategoryType } from '../interfaces/category.interfaces';

export class CreatePokemonDto {
  @ApiProperty({
    example: 'Pikachu2',
    description: 'Name pokemon',
    minLength: 3,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  name: string;

  @ApiProperty({
    example: 55,
    description: 'Attack points',
  })
  @IsNumber()
  @IsInt()
  @IsNotEmpty()
  attack: number;

  @ApiProperty({
    example: 40,
    description: 'Defense points',
  })
  @IsNumber()
  @IsInt()
  @IsNotEmpty()
  defense: number;

  @ApiProperty({
    example: 35,
    description: 'Health points',
  })
  @IsNumber()
  @IsInt()
  @IsNotEmpty()
  hp: number;

  @ApiProperty({
    example: 90,
    description: 'Speed points',
  })
  @IsNumber()
  @IsInt()
  @IsNotEmpty()
  speed: number;

  @ApiProperty({
    example:
      'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png',
    description: 'Pokemon image URL',
  })
  @IsString()
  @IsNotEmpty()
  imageUrl: string;

  @ApiProperty({
    example: ['electric'],
    description: 'Pokemon categories',
  })
  @IsArray()
  @IsEnum(CategoryType, { each: true }) // Valida que cada categoría esté en CategoryType
  categories: CategoryType[];
}
