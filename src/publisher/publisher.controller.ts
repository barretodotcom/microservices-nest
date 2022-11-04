import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PublisherService } from './publisher.service';
import { CreatePublisherDto } from './dto/create-publisher.dto';
import { UpdatePublisherDto } from './dto/update-publisher.dto';
import { EventPattern } from '@nestjs/microservices';

@Controller('publisher')
export class PublisherController {

  constructor(private readonly publisherService: PublisherService) { }

  @Post()
  async create(@Body() createPublisherDto: CreatePublisherDto) {
    return await this.publisherService.create(createPublisherDto);
  }

  @EventPattern("usuario-criado")
  findAll() {
    return this.publisherService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.publisherService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePublisherDto: UpdatePublisherDto) {
    return this.publisherService.update(+id, updatePublisherDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.publisherService.remove(+id);
  }
}
