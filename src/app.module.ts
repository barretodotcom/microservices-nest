import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config'
import { PublisherModule } from './publisher/publisher.module';

@Module({
  imports: [ConfigModule, PublisherModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
