import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  
  app.enableCors();
  
  const port = configService.get<number>('PORT') || 3001;
  await app.listen(port);
  
  console.log(`Backend is running on: ${await app.getUrl()}`);
}
bootstrap();
