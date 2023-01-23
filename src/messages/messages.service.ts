import { Injectable } from '@nestjs/common';

import { MessageRepository } from './messages.repositories';

@Injectable()
export class MessagesService {
  constructor(private messageRepo: MessageRepository) {}

  async findOne(id: string) {
    return await this.messageRepo.findOne(id);
  }

  async findAll() {
    return await this.messageRepo.findAll();
  }

  async create(content: string) {
    return await this.messageRepo.create(content);
  }
}
