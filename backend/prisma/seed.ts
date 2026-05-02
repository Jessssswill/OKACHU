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
    'OKACHU-SFG7D',
    'OKACHU-FBRVP',
    'OKACHU-Q7T8Q',
    'OKACHU-7PGCP',
    'OKACHU-FYT2T',
    'OKACHU-DM8DZ',
    'OKACHU-G2AP7',
    'OKACHU-YB4Q6',
    'OKACHU-3EPGA',
    'OKACHU-9Y5SG',
    'OKACHU-VHBZV',
    'OKACHU-TTK7W',
    'OKACHU-EKNYM',
    'OKACHU-RBKMG',
    'OKACHU-3J79E',
    'OKACHU-PBK3G',
    'OKACHU-6WAJH',
    'OKACHU-H34JX',
    'OKACHU-T8D6L',
    'OKACHU-C4NRD',
    'OKACHU-MQPXD',
    'OKACHU-FH65X',
    'OKACHU-TXUHM',
    'OKACHU-C3L8E',
    'OKACHU-WZFFN',
    'OKACHU-VUN8V',
    'OKACHU-GXCQA',
    'OKACHU-3KTSP',
    'OKACHU-FUGBF',
    'OKACHU-JMYZ9',
    'OKACHU-V68MP',
    'OKACHU-U5MZB',
    'OKACHU-BSWU2',
    'OKACHU-MEQX8',
    'OKACHU-MXC45',
    'OKACHU-3ZED5',
    'OKACHU-86AJL',
    'OKACHU-66ZCS',
    'OKACHU-WHRYN',
    'OKACHU-S8H6N',
    'OKACHU-VT7R9',
    'OKACHU-G4EZR',
    'OKACHU-A6X8K',
    'OKACHU-485SR',
    'OKACHU-6REH7',
    'OKACHU-AZTLJ',
    'OKACHU-XF9HA',
    'OKACHU-LSKQU',
    'OKACHU-6CFEV',
    'OKACHU-TLT4H',
    'OKACHU-BY5Y2',
    'OKACHU-7452R',
    'OKACHU-9UQLX',
    'OKACHU-XLCPS',
    'OKACHU-7JTD3',
    'OKACHU-AC7MT',
    'OKACHU-QDPTG',
    'OKACHU-X6NAH',
    'OKACHU-3PK4Z',
    'OKACHU-3ZHJY',
    'OKACHU-XVT2X',
    'OKACHU-AVRGV',
    'OKACHU-59DFG',
    'OKACHU-C5PFJ',
    'OKACHU-7YJFA',
    'OKACHU-XULE2',
    'OKACHU-JDVMP',
    'OKACHU-SFVV7',
    'OKACHU-FHU2L',
    'OKACHU-BXA9P',
    'OKACHU-5MJHD',
    'OKACHU-R6XQ7',
    'OKACHU-UTJ6F',
    'OKACHU-2UVGK',
    'OKACHU-SW3GM',
    'OKACHU-9HJ4G',
    'OKACHU-QFS87',
    'OKACHU-9RLNF',
    'OKACHU-A4YDB',
    'OKACHU-H55VS',
    'OKACHU-8K633',
    'OKACHU-5WWES',
    'OKACHU-2GGDH',
    'OKACHU-5AXST',
    'OKACHU-54PQF',
    'OKACHU-BTZCY',
    'OKACHU-TU74U',
    'OKACHU-WHY8A',
    'OKACHU-B99L5',
    'OKACHU-L4RBB',
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
