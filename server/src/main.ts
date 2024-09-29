import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log("\nserver is running on: https://localhost:3000/\n")
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(3000);
}
bootstrap();
