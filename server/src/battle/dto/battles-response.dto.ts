import { ApiProperty } from '@nestjs/swagger';

class BattleDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  selectedPokemonId: string;

  @ApiProperty()
  opponentPokemonId: string;

  @ApiProperty()
  winnerId: string;

  @ApiProperty()
  selectedPokemonHp: number;

  @ApiProperty()
  opponentPokemonHp: number;

  @ApiProperty()
  timestamp: string;
}

class BattlesDataDto {
  @ApiProperty({ type: [BattleDto] })
  battles: BattleDto[];

  @ApiProperty()
  total: number;

  @ApiProperty()
  limit: number;

  @ApiProperty()
  offset: number;
}

export class BattlesResponseDto {
  @ApiProperty({ type: BattlesDataDto })
  data: BattlesDataDto;
}
