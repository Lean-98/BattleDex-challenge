import { ApiProperty } from '@nestjs/swagger';

class CategoryDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;
}

class PokemonDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  attack: number;

  @ApiProperty()
  defense: number;

  @ApiProperty()
  hp: number;

  @ApiProperty()
  speed: number;

  @ApiProperty()
  imageUrl: string;

  @ApiProperty({ type: [CategoryDto] })
  categories: CategoryDto[];
}

export class PokemonsResponseDto {
  @ApiProperty({ type: [PokemonDto] })
  data: PokemonDto[];

  @ApiProperty()
  total: number;

  @ApiProperty()
  limit: number;

  @ApiProperty()
  offset: number;
}
