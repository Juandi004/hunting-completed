import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { CreaturesModule } from './creatures/creatures.module';

@Module({
  imports: [PrismaModule, CreaturesModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, PrismaModule],
})
export class AppModule {}
