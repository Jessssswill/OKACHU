// ===================================================
// generate-100-final.ts — Generate exact 100 codes
// Run with: npx ts-node prisma/generate-100-final.ts
// ===================================================

import * as dotenv from 'dotenv';
import * as path from 'path';

// Load environment variables explicitly
dotenv.config({ path: path.resolve(__dirname, '../.env') });

import { PrismaClient } from '@prisma/client';
import crypto from 'crypto';
import fs from 'fs';

const prisma = new PrismaClient({ log: ['error'] });

function generateCode(): string {
  // Format: OKACHU-XXXXX (5 random alphanumeric chars)
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // No 0/O/1/I to avoid confusion
  let code = 'OKACHU-';
  for (let i = 0; i < 5; i++) {
    const randomIndex = crypto.randomInt(0, chars.length);
    code += chars[randomIndex];
  }
  return code;
}

async function main() {
  console.log('Connecting to database:', process.env.DATABASE_URL);
  
  // 1. Get existing codes
  const existingRecords = await prisma.voucher.findMany({ select: { code: true } });
  const existingCodes = new Set(existingRecords.map(r => r.code));
  
  console.log(`Currently have ${existingCodes.size} voucher codes in database.`);
  
  const targetTotal = 100;
  const needed = targetTotal - existingCodes.size;
  
  if (needed > 0) {
    console.log(`Generating ${needed} new unique codes to reach ${targetTotal}...`);
    const newCodes: string[] = [];
    
    while (newCodes.length < needed) {
      const code = generateCode();
      if (!existingCodes.has(code)) {
        existingCodes.add(code);
        newCodes.push(code);
      }
    }
    
    // Insert new codes
    let count = 0;
    for (const code of newCodes) {
      await prisma.voucher.create({
        data: { code },
      });
      count++;
      if (count % 20 === 0) console.log(`  Inserted ${count}/${needed}...`);
    }
    console.log(`✅ Successfully added ${needed} new codes!`);
  } else {
    console.log(`✅ Already have ${existingCodes.size} codes. No new codes needed.`);
  }

  // 2. Fetch ALL codes and save to a file
  const allVouchers = await prisma.voucher.findMany({
    orderBy: { id: 'asc' }
  });
  
  const outputFile = path.resolve(__dirname, '../../100-OKACHU-VOUCHERS.txt');
  let fileContent = '=======================================\n';
  fileContent +=    '      100 VOUCHER CODES FOR OKACHU     \n';
  fileContent +=    '=======================================\n\n';
  
  allVouchers.forEach((v, index) => {
    fileContent += `${String(index + 1).padStart(3, ' ')}. ${v.code} ${v.isUsed ? '(USED)' : ''}\n`;
  });
  
  fs.writeFileSync(outputFile, fileContent);
  console.log(`\n🎉 All 100 codes have been saved to: ${outputFile}`);
}

main()
  .catch((e) => {
    console.error('Failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
