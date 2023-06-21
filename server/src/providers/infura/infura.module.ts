import { Module } from '@nestjs/common';
import { InfuraController } from './infura.controller';
import { InfuraService } from './infura.service';

@Module({
  controllers: [InfuraController],
  providers: [InfuraService]
})
export class InfuraModule {}
