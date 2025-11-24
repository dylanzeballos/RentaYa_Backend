import { Request, Response, RequestHandler } from "express";
import { PaymentUseCase } from "../../application/usecases/PaymentUseCase";
import { PaymentRepository } from "../repositories/PaymentRepository";
import { AppError } from "@/shared/domain/errors/AppError";
import { asyncHandler } from "@/shared/infrastructure/utils/asyncHandler";

import { SerializationUtils } from "@/shared/infrastructure/utils/SerializationUtils";

export class PaymentController {
  private paymentUseCase: PaymentUseCase;

  constructor() {
    const paymentRepository = new PaymentRepository();
    this.paymentUseCase = new PaymentUseCase(paymentRepository);
  }

  createPayment: RequestHandler = asyncHandler(
    async (req: Request, res: Response): Promise<void> => {
      const { name, days} = req.body;
      if (!name || !days) {
        throw new AppError("Missing or invalid fields", 400);
      }
      const payment = await this.paymentUseCase.createPayment({
        name,
        days
      });
      res.status(201).json({
        success: true,
        data: SerializationUtils.serializePrismaData(payment),
        message: "Payment created successfully",
      });
    },
  );

  getPayments: RequestHandler = asyncHandler(
    async (req: Request, res: Response): Promise<void> => {
      const payments = await this.paymentUseCase.getPayments();
      res.status(200).json({
        success: true,
        data: SerializationUtils.serializePrismaData(payments),
        message: "Payments retrieved successfully",
      });
    },
  );
}
