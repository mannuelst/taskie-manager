import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP, //type of transport (kafka, tcp...)
      options: { port: 3002, host: '127.0.0.1' },
    },
  );
  // await app.listen(3001);
  await app.listen();
  console.log('notification service is on');
}
bootstrap();
