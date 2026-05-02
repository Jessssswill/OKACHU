// ===================================================
// prisma.module.ts — Prisma Module
// Makes PrismaService available to any module that
// imports it.
// ===================================================

import { Module, Global } from '@nestjs/common';
import { PrismaService } from './prisma.service';

// @Global() makes PrismaService available everywhere
// without needing to import PrismaModule in each module.
@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
