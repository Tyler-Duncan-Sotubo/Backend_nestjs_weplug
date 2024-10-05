import { Module } from '@nestjs/common';
import { MonthlySalesController } from './monthly-sales.controller';
import { MonthlySalesService } from './monthly-sales.service';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [MonthlySalesController],
  providers: [MonthlySalesService, PrismaService],
})
export class MonthlySalesModule {}
