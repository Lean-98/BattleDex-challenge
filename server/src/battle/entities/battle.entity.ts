import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'battle' })
export class Battle {
  @ApiProperty({
    example: '51dcd3e6-18b4-4a71-8ee4-04b99b089f56',
    description: 'Battle ID',
    uniqueItems: true,
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    example: '3f8fd0df-2cad-41ed-aa77-ff2e73c8f0a6',
    description: 'ID of the first Pokemon involved in the battle',
    uniqueItems: true,
  })
  @Column({
    type: 'uuid',
    nullable: false,
  })
  selectedPokemonId: string;

  @ApiProperty({
    example: '4559136e-f2a8-4d8a-a791-e618c8f661ec',
    description: 'ID of the second Pokemon involved in the battle',
    uniqueItems: true,
  })
  @Column({
    type: 'uuid',
    nullable: false,
  })
  opponentPokemonId: string;

  @ApiProperty({
    example: '3f8fd0df-2cad-41ed-aa77-ff2e73c8f0a6',
    description: 'ID of the Pokemon that won the battle',
    uniqueItems: true,
  })
  @Column({
    type: 'uuid',
    nullable: false,
  })
  winnerId: string;

  @ApiProperty({
    example: 35,
    description: 'Health points of the first Pokemon at the time of the battle',
  })
  @Column({
    type: 'integer',
    nullable: false,
  })
  selectedPokemonHp: number;

  @ApiProperty({
    example: 50,
    description:
      'Health points of the second Pokemon at the time of the battle',
  })
  @Column({
    type: 'integer',
    nullable: false,
  })
  opponentPokemonHp: number;

  @ApiProperty({
    example: '2024-08-07T10:00:00Z',
    description: 'Timestamp of the battle',
  })
  @Column({
    type: 'datetime',
    nullable: false,
  })
  timestamp: Date;
}
