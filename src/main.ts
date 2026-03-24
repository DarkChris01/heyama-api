import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  // Autoriser CORS
  app.enableCors({
    origin: 'http://localhost:3000', // ton front
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // si tu gères les cookies ou JWT
  });

  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
