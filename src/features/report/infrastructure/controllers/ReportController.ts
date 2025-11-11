import { Request, Response, RequestHandler } from "express";
import { ReportUseCase } from "../../application/usecases/ReportUseCase";
import { ReportRepository } from "../repositories/ReportRepository";
import { AppError } from "@/shared/domain/errors/AppError";
import { asyncHandler } from "@/shared/infrastructure/utils/asyncHandler";

export class ReportController {
  private reportUseCase: ReportUseCase;

  constructor() {
    const reportRepository = new ReportRepository();
    this.reportUseCase = new ReportUseCase(reportRepository);
  }

  createReport: RequestHandler = asyncHandler(
    async (req: Request, res: Response): Promise<void> => {
      const {
        userId,
        propertyId,
        type,
        status,
        totalPrice,
        startDate,
        finishDate,
        uploadedAt,
        parameters,
        fileUrl
      } = req.body;
      if (!userId || !propertyId || !type) {
        throw new AppError("Missing required fields", 400);
      }
      const report = await this.reportUseCase.createReport({
        userId,
        propertyId,
        type,
        status,
        totalPrice,
        startDate,
        finishDate,
        uploadedAt,
        parameters,
        fileUrl
      });
      res.status(201).json({
        success: true,
        data: report,
        message: "Report created successfully",
      });
    }
  );

  getReportsByUserAndProperty: RequestHandler = asyncHandler(
    async (req: Request, res: Response): Promise<void> => {
      const { userId, propertyId } = req.params;
      if (!userId || !propertyId) {
        throw new AppError("User ID and Property ID are required", 400);
      }
      const reports = await this.reportUseCase.getReportsByUserAndProperty(userId, propertyId);
      res.status(200).json({
        success: true,
        data: reports,
        message: "Reports retrieved successfully",
      });
    }
  );
}

