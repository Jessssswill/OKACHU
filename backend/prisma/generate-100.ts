// ===================================================
// generate-100.ts — Generate 100 unique voucher codes
// Run with: npx ts-node prisma/generate-100.ts
// ===================================================

import { PrismaClient } from '@prisma/client';
import crypto from 'crypto';

const prisma = new PrismaClient();

function generateCode(): string {
  // Format: OKACHU-XXXX (4 random alphanumeric chars)
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // No 0/O/1/I to avoid confusion
  let code = 'OKACHU-';
  for (let i = 0; i < 5; i++) {
    const randomIndex = crypto.randomInt(0, chars.length);
    code += chars[randomIndex];
  }
  return code;
}

async function main() {
  const codes: string[] = [];
  const existing = new Set<string>();

  // Generate 100 unique codes
  while (codes.length < 100) {
    const code = generateCode();
    if (!existing.has(code)) {
      existing.add(code);
      codes.push(code);
    }
  }

  console.log('Inserting 100 voucher codes...\n');

  let count = 0;
  for (const code of codes) {
    await prisma.voucher.upsert({
      where: { code },
      update: {},
      create: { code },
    });
    count++;
    if (count % 10 === 0) {
      console.log(`  ${count}/100 inserted...`);
    }
  }

  // Print all codes for reference
  console.log('\n=== ALL 100 VOUCHER CODES ===\n');
  codes.forEach((code, i) => {
    console.log(`${String(i + 1).padStart(3, ' ')}. ${code}`);
  });

  console.log(`\nDone! ${codes.length} new voucher codes created.`);
}

main()
  .catch((e) => {
    console.error('Failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
