import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma/prisma.service';
import { BankAccountModule } from './bank-account/bank-account.module';

@Module({
  imports: [AuthModule, BankAccountModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
