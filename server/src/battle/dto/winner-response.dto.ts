import { ApiProperty } from '@nestjs/swagger';

class PokemonWinnerDto {
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
}

export class WinnerResponseDto {
  @ApiProperty({ type: PokemonWinnerDto })
  pokemonWinner: PokemonWinnerDto;

  @ApiProperty()
  message: string;
}
