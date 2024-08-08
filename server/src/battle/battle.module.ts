import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Battle } from './entities/battle.entity';
import { BattleService } from './battle.service';
import { BattleController } from './battle.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Battle])],
  controllers: [BattleController],
  providers: [BattleService],
  exports: [BattleService],
})
export class BattleModule {}
