import { Module } from '@nestjs/common';
import { PublisherService } from './publisher.service';
import { PublisherController } from './publisher.controller';

@Module({
  imports: [],
  controllers: [PublisherController],
  providers: [PublisherService]
})
export class PublisherModule { }
