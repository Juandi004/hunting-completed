import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
    providers: [PrismaModule],
    exports: [PrismaModule],
    imports: [PrismaService],
})
export class PrismaModule {}
