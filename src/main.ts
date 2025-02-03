import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import * as config from 'config';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const serverConfig = config.get('server');

  await app.listen(serverConfig.port);

  Logger.log(`Application running on port ${serverConfig.port}`);
}
bootstrap();
