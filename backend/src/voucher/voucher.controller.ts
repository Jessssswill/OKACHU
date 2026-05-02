// ===================================================
// voucher.controller.ts — API Endpoint
// POST /voucher/claim — receives a voucher code
// and returns the randomly picked character.
// ===================================================

import { Controller, Post, Body } from '@nestjs/common';
import { VoucherService } from './voucher.service';
import { ClaimVoucherDto } from './dto/claim-voucher.dto';

@Controller('voucher')
export class VoucherController {
  // Inject the VoucherService
  constructor(private voucherService: VoucherService) {}

  // --------------------------------------------------
  // POST /voucher/claim
  //
  // Request body: { "code": "OKACHU-A1B2C3" }
  //
  // Possible responses:
  //   200 → { success: true, character: "...", index: 0 }
  //   400 → { message: "Maaf, kode ini sudah dipakai." }
  //   404 → { message: "Kode tidak ditemukan." }
  // --------------------------------------------------
  @Post('claim')
  async claim(@Body() dto: ClaimVoucherDto) {
    return this.voucherService.claimVoucher(dto.code);
  }
}
