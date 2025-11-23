import { PaymentRepository } from "@/features/property/infrastructure/repositories/PaymentRepository";
import { Payment } from "@/generated/prisma";

export class PaymentUseCase {
  constructor(private readonly repo: PaymentRepository) {}

  async createPayment(payload: { name: string; days: number }): Promise<Payment> {
    return await this.repo.createPayment(payload);
  }

  async getPayments(): Promise<Payment[]> {
    return await this.repo.getPayments();
  }
}
