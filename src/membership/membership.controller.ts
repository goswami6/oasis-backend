import { Controller, Get, Patch, Body, Param } from '@nestjs/common';
import { MembershipService } from './membership.service';
import { Membership } from './membership.schema';

@Controller('membership')
export class MembershipController {
  constructor(private readonly membershipService: MembershipService) {}

  @Get()
  async findAll() {
    return this.membershipService.findAll();
  }

  @Patch(':tier')
  async update(@Param('tier') tier: string, @Body() updateData: Partial<Membership>) {
    return this.membershipService.update(tier, updateData);
  }
}
