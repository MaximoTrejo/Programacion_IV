import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //definir mas configuraciones a nivel app
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
