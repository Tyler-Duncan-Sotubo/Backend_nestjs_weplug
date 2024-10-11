import { Injectable } from '@nestjs/common';

@Injectable()
export class PaymentService {
  async processPayment(amount: number): Promise<boolean> {
    // Replace with actual payment gateway logic (e.g., Stripe, PayPal)
    console.log(`Processing payment of £${amount}`);
    return true; // Simulate successful payment
  }
}
