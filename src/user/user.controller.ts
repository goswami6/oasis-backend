import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: any) {
    return this.userService.create(createUserDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Get(':id/wallet')
  async getWalletBalance(@Param('id') id: string) {
    const user = await this.userService.findOne(id);
    return { success: true, balance: user?.walletBalance || 0 };
  }

  @Post(':id/pay-with-wallet')
  async payWithWallet(@Param('id') id: string, @Body('amount') amount: number) {
    try {
      const user = await this.userService.deductWalletBalance(id, amount);
      return { success: true, newBalance: user?.walletBalance, message: "Payment successful using wallet tokens." };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }
}
