import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.set('view engine', 'ejs');
  app.useStaticAssets(join(__dirname, '../public'));
  await app.listen(3000);
}
bootstrap();
