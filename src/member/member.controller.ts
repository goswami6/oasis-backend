import { Controller, Post, Get, Patch, Body, Param } from '@nestjs/common';
import { MemberService } from './member.service';

@Controller('member')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Post('apply')
  async apply(@Body() data: any) {
    return this.memberService.apply(data);
  }

  @Get()
  async findAll() {
    return this.memberService.findAll();
  }

  @Patch(':id/status')
  async updateStatus(@Param('id') id: string, @Body('status') status: string) {
    return this.memberService.updateStatus(id, status);
  }
}
