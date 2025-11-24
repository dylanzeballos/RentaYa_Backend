import prisma from "@/config/prisma";
import { Payment } from "@prisma/client";

export class PaymentRepository {
  async createPayment(payload: { name: string; days: number }): Promise<Payment> {
    const created = await prisma.payment.create({ data: payload });
    return created;
  }

  async getPayments(): Promise<Payment[]> {
    const payments = await prisma.payment.findMany({ orderBy: { name: "asc" } });
    return payments;
  }
}
