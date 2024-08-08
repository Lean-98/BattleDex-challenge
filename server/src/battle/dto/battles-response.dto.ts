import { ApiProperty } from '@nestjs/swagger';

class BattleDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  pokemonOneId: string;

  @ApiProperty()
  pokemonTwoId: string;

  @ApiProperty()
  winnerId: string;

  @ApiProperty()
  pokemonOneHp: number;

  @ApiProperty()
  pokemonTwoHp: number;

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
