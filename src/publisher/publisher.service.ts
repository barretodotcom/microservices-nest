import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { CreatePublisherDto } from './dto/create-publisher.dto';
import { UpdatePublisherDto } from './dto/update-publisher.dto';
import { v4 as uuid } from 'uuid'
@Injectable()
export class PublisherService {

  private clientEmailProxy: ClientProxy;

  constructor() {
    this.clientEmailProxy = ClientProxyFactory.create({
      transport: 5,
      options: {
        urls: ["amqp://guest:guest@localhost:5672/hello"],
        queue: "user-email"
      }
    })
  }

  public async create(createPublisherDto: CreatePublisherDto) {
    for (var i = 0; i < 999; i++) {
      this.clientEmailProxy.emit("usuario-criado", {
        email: uuid() + "@gmail.com"
      })
    }

    return { "deu": "bom" }
  }

  async findAll() {


    return `This action returns all publisher`;
  }

  findOne(id: number) {
    return `This action returns a #${id} publisher`;
  }

  update(id: number, updatePublisherDto: UpdatePublisherDto) {
    return `This action updates a #${id} publisher`;
  }

  remove(id: number) {
    return `This action removes a #${id} publisher`;
  }
}
