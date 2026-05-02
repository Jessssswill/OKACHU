// ===================================================
// main.ts — NestJS Entry Point
// Uses process.env.PORT for Render deployment.
// CORS allows the Vercel frontend domain.
// ===================================================

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // --------------------------------------------------
  // CORS — Allow both localhost (dev) and Vercel (prod)
  // --------------------------------------------------
  app.enableCors();

  // Railway/Cloud providers require binding to '0.0.0.0' instead of localhost
  const port = process.env.PORT || 3000;
  await app.listen(port, '0.0.0.0');
  console.log(`🚀 Backend running on port ${port}`);
}
bootstrap();
