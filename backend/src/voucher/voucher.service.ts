// ===================================================
// voucher.service.ts — Business Logic for Vouchers
// Handles: code validation, random character pick,
// and marking the voucher as used in the database.
// ===================================================

import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

// --------------------------------------------------
// The 3 OKACHU characters that can be won.
// Each has a name and an index (used by the frontend
// to display the correct image).
// --------------------------------------------------
const CHARACTERS = [
  { index: 0, name: 'Okachu x Kurung Tulang Belut' },
  { index: 1, name: 'Okachu x Kurung Cekak Musang' },
  { index: 2, name: 'Okachu x Kebaya Laboh' },
];

@Injectable()
export class VoucherService {
  // Inject PrismaService to access the database
  constructor(private prisma: PrismaService) {}

  // --------------------------------------------------
  // claimVoucher — The main logic
  //
  // 1. Look up the code in the database
  // 2. Check if it exists
  // 3. Check if it's already been used
  // 4. Pick a random character
  // 5. Mark the code as "used" and save the character
  // 6. Return the character info to the controller
  // --------------------------------------------------
  async claimVoucher(code: string) {
    // Step 1: Find the voucher by its code
    const voucher = await this.prisma.voucher.findUnique({
      where: { code: code },
    });

    // Step 2: If the code doesn't exist → error
    if (!voucher) {
      throw new NotFoundException('Kode tidak ditemukan.');
    }

    // Step 3: If the code was already used → error
    if (voucher.isUsed) {
      throw new BadRequestException('Maaf, kode ini sudah dipakai.');
    }

    // Step 4: Pick a random character (0, 1, or 2)
    const randomIndex = Math.floor(Math.random() * CHARACTERS.length);
    const winningCharacter = CHARACTERS[randomIndex];

    // Step 5: Update the database ATOMICALLY to prevent race conditions
    // If two users submit the same code at the same time, only one will succeed.
    const result = await this.prisma.voucher.updateMany({
      where: { 
        id: voucher.id,
        isUsed: false // Ensure it hasn't been used since our last check
      },
      data: {
        isUsed: true,
        character: winningCharacter.name,
        claimedAt: new Date(),
      },
    });

    if (result.count === 0) {
      throw new BadRequestException('Maaf, kode ini sudah dipakai.');
    }

    // Step 6: Return the result to the controller
    return {
      success: true,
      message: 'Yeay! Ini Karakter Spesial Kamu!',
      character: winningCharacter.name,
      index: winningCharacter.index,
    };
  }
}
