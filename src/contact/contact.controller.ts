import { Controller, Get, Post, Body, Put, Param } from '@nestjs/common';
import { ContactService } from './contact.service';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  async create(@Body() createContactDto: any) {
    return this.contactService.create(createContactDto);
  }

  @Get()
  async findAll() {
    return this.contactService.findAll();
  }

  @Put(':id/status')
  async updateStatus(@Param('id') id: string, @Body('status') status: string) {
    return this.contactService.updateStatus(id, status);
  }
}
