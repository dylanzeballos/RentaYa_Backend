import { Request, Response, RequestHandler } from "express";
import { ReportUseCase } from "../../application/usecases/ReportUseCase";
import { ReportRepository } from "../repositories/ReportRepository";
import { PropertyRepository } from "../../../property/infrastructure/repositories/PropertyRepository";
import { AppError } from "@/shared/domain/errors/AppError";
import { asyncHandler } from "@/shared/infrastructure/utils/asyncHandler";
import { AuthenticatedRequest } from '@/shared/infrastructure/middleware/AuthMiddleware';

export class ReportController {
  private reportUseCase: ReportUseCase;

  constructor() {
    const reportRepository = new ReportRepository();
    const propertyRepository = new PropertyRepository();

    this.reportUseCase = new ReportUseCase(reportRepository, propertyRepository);
  }
  createReport: 
  RequestHandler = asyncHandler(
    async (req: AuthenticatedRequest, res: Response): Promise<void> => {
      const userId = req.user?.userId;
      if (!userId) {
        throw new AppError("Usuario no autentificado", 400);
      }
      const {
        propertyId,
        startDate,
        finishDate,
      } = req.body;
      if (!finishDate || !propertyId || !startDate) {
        throw new AppError("Faltan campos requeridos", 400);
      }
      const report = await this.reportUseCase.createReport({
        userId,
        propertyId,
        startDate,
        finishDate
      });
      res.status(201).json({
        success: true,
        data: report,
        message: "Report created successfully",
      });
    }
  );
  acceptReport:
  RequestHandler = asyncHandler(
    async(req: Request, res: Response): Promise<void> => {
      const { reportId } = req.params as { reportId?: string };
      if (!reportId) {
        throw new AppError("reportId is required", 400);
      }
      const report = await this.reportUseCase.acceptReport({ reportId });
      res.status(200).json({
        success: true,
        data: report,
        message: "Report accepted successfully",
      });
    }
  );
    
  getReports: 
  RequestHandler = asyncHandler(
    async (req: AuthenticatedRequest, res: Response) => {
      const userId = req.user?.userId;
      if (!userId) {
        throw new AppError("Usuario no autentificado", 400);
      }
      const reports = await this.reportUseCase.getReportsByOwner({ userId });
      res.status(200).json({
        success: true,
        data: reports,
        message: "Reports retrieved successfully",
      });
    }
  )
  
  // getReportsByUserAndProperty: RequestHandler = asyncHandler(
  //   async (req: Request, res: Response): Promise<void> => {
  //     const { userId, propertyId } = req.params;
  //     if (!userId || !propertyId) {
  //       throw new AppError("User ID and Property ID are required", 400);
  //     }
  //     const reports = await this.reportUseCase.getReportsByUserAndProperty(userId, propertyId);
  //     res.status(200).json({
  //       success: true,
  //       data: reports,
  //       message: "Reports retrieved successfully",
  //     });
  //   }
  // );

  // createReportByEmail: RequestHandler = asyncHandler(
  //   async (req: Request, res: Response): Promise<void> => {
  //     const {
  //       email,
  //       propertyId,
  //       type,
  //       status,
  //       totalPrice,
  //       startDate,
  //       finishDate,
  //       uploadedAt,
  //       parameters,
  //       fileUrl,
  //     } = req.body;

  //     if (!email || !propertyId) {
  //       throw new AppError("email and propertyId are required", 400);
  //     }

  //     const resolvedType = type ?? "email";

  //     const report = await this.reportUseCase.createReportByEmail({
  //       email,
  //       propertyId,
  //       type: resolvedType,
  //       status,
  //       totalPrice,
  //       startDate,
  //       finishDate,
  //       uploadedAt,
  //       parameters,
  //       fileUrl,
  //     });

  //     res.status(201).json({
  //       success: true,
  //       data: report,
  //       message: "Report created successfully",
  //     });
  //   }
  // );
}

