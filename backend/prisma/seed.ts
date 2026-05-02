// ===================================================
// seed.ts — Database Seed Script (Prisma v5)
// Run with: npx prisma db seed
// ===================================================

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const sampleCodes = [
    'OKACHU-TEST1',
    'OKACHU-TEST2',
    'OKACHU-TEST3',
    'OKACHU-A1B2C3',
    'OKACHU-D4E5F6',
    'OKACHU-G7H8I9',
    'OKACHU-J1K2L3',
    'OKACHU-M4N5O6',
    'OKACHU-P7Q8R9',
    'OKACHU-S1T2U3',
  ];

  console.log('Seeding voucher codes...');

  for (const code of sampleCodes) {
    await prisma.voucher.upsert({
      where: { code },
      update: {},
      create: { code },
    });
    console.log(`  + ${code}`);
  }

  console.log(`Done! ${sampleCodes.length} voucher codes ready.`);
}

main()
  .catch((e) => {
    console.error('Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
