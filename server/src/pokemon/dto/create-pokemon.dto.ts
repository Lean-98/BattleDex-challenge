import { ApiProperty } from '@nestjs/swagger';
import {
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
    example: 'Pikachu',
    description: 'Name pokemon',
    minLength: 3,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  name: string;

  @ApiProperty({
    example: 4,
    description: 'Attack points',
  })
  @IsNumber()
  @IsInt()
  @IsNotEmpty()
  attack: number;

  @ApiProperty({
    example: 3,
    description: 'Defense points',
  })
  @IsNumber()
  @IsInt()
  @IsNotEmpty()
  defense: number;

  @ApiProperty({
    example: 3,
    description: 'Health points',
  })
  @IsNumber()
  @IsInt()
  @IsNotEmpty()
  hp: number;

  @ApiProperty({
    example: 6,
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
    example: CategoryType.electric,
    description: 'Category type',
    enum: CategoryType,
  })
  @IsEnum(CategoryType)
  @IsNotEmpty()
  category: CategoryType;
}
