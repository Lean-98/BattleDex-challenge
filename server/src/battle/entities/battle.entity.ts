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
    description: 'ID of the first Pokemon',
    uniqueItems: true,
  })
  @Column({
    type: 'uuid',
    nullable: false,
  })
  pokemonOneId: string;

  @ApiProperty({
    example: '4559136e-f2a8-4d8a-a791-e618c8f661ec',
    description: 'ID of the second Pokemon',
    uniqueItems: true,
  })
  @Column({
    type: 'uuid',
    nullable: false,
  })
  pokemonTwoId: string;

  @ApiProperty({
    example: '3f8fd0df-2cad-41ed-aa77-ff2e73c8f0a6',
    description: 'Battle winner ID',
    uniqueItems: true,
  })
  @Column({
    type: 'uuid',
    nullable: false,
  })
  winnerId: string;

  @ApiProperty({
    example: 35,
    description: 'Health points of the first pokemon',
  })
  @Column({
    type: 'integer',
    nullable: false,
  })
  pokemonOneHp: number;

  @ApiProperty({
    example: 50,
    description: 'Health points of the second pokemon',
  })
  @Column({
    type: 'integer',
    nullable: false,
  })
  pokemonTwoHp: number;

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
