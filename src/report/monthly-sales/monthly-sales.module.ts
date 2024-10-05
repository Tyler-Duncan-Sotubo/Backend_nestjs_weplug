import { Module } from '@nestjs/common';
import { MonthlySalesController } from './monthly-sales.controller';
import { MonthlySalesService } from './monthly-sales.service';
import { AudioPrismaService } from 'src/database/audio-prisma.service';

@Module({
  controllers: [MonthlySalesController],
  providers: [MonthlySalesService, AudioPrismaService],
})
export class MonthlySalesModule {}
