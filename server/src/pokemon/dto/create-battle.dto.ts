import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsInt, IsNotEmpty, IsNumber, IsUUID } from 'class-validator';

export class CreateBattleDto {
  @ApiProperty({
    example: '3f8fd0df-2cad-41ed-aa77-ff2e73c8f0a6',
    description: 'ID of the first Pokemon',
    uniqueItems: true,
  })
  @IsUUID()
  pokemonOneId: string;

  @ApiProperty({
    example: '4559136e-f2a8-4d8a-a791-e618c8f661ec',
    description: 'ID of the second Pokemon',
    uniqueItems: true,
  })
  @IsUUID()
  pokemonTwoId: string;

  @ApiProperty({
    example: '3f8fd0df-2cad-41ed-aa77-ff2e73c8f0a6',
    description: 'Battle winner ID',
    uniqueItems: true,
  })
  @IsUUID()
  winnerId: string;

  @ApiProperty({
    example: 35,
    description: 'Health points of the first pokemon',
  })
  @IsNumber()
  @IsInt()
  @IsNotEmpty()
  pokemonOneHp: number;

  @ApiProperty({
    example: 50,
    description: 'Health points of the second pokemon',
  })
  @IsNumber()
  @IsInt()
  @IsNotEmpty()
  pokemonTwoHp: number;

  @ApiProperty({
    example: '2024-08-07T10:00:00Z',
    description: 'Timestamp of the battle',
  })
  @IsDate()
  timesamp: Date;
}
