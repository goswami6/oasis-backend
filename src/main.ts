import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  
  app.enableCors();
  
  const port = process.env.PORT || 3001;
  await app.listen(port, '127.0.0.1');
  
  console.log(`Backend is running on port: ${port}`);
}
bootstrap();
