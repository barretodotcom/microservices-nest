import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
      url: 'amqp://guest:guest@localhost:5672/hello',
      queue: 'user-email',
      queueOptions: {
        durable: true
      }
    }
  })
  await app.startAllMicroservices();

  await app.listen(3000);

}
bootstrap();
