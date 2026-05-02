// ===================================================
// voucher.module.ts — Voucher Feature Module
// Wires up the controller and service together.
// ===================================================

import { Module } from '@nestjs/common';
import { VoucherController } from './voucher.controller';
import { VoucherService } from './voucher.service';

@Module({
  controllers: [VoucherController],
  providers: [VoucherService],
})
export class VoucherModule {}
