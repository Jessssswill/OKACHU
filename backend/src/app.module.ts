// ===================================================
// app.module.ts — Root Module
// Imports PrismaModule (database) and VoucherModule
// (the gacha feature).
// ===================================================

import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { VoucherModule } from './voucher/voucher.module';

@Module({
  imports: [
    PrismaModule,   // Database connection (global)
    VoucherModule,  // Voucher gacha feature
  ],
})
export class AppModule {}
