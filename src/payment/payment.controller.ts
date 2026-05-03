import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post('create-order')
  async createOrder(@Body('amount') amount: number) {
    try {
      const order = await this.paymentService.createOrder(amount);
      return { success: true, order };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('verify')
  async verifyPayment(
    @Body('razorpay_payment_id') paymentId: string,
    @Body('razorpay_order_id') orderId: string,
    @Body('razorpay_signature') signature: string,
  ) {
    const isValid = await this.paymentService.verifyPayment(paymentId, orderId, signature);
    if (isValid) {
      return { success: true, message: 'Payment verified successfully' };
    } else {
      throw new HttpException('Invalid signature', HttpStatus.BAD_REQUEST);
    }
  }
}
