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
  app.enableCors({
    origin: '*',
    methods: ['GET', 'POST'],
  });

  // Render assigns a PORT via environment variable.
  // Falls back to 3000 for local development.
  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`🚀 Backend running on port ${port}`);
}
bootstrap();
