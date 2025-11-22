import { ReportRepository } from "@/features/report/infrastructure/repositories/ReportRepository";

export class ReportUseCase {
  private reportRepository: ReportRepository;

  constructor(reportRepository: ReportRepository) {
    this.reportRepository = reportRepository;
  }

  async createReport(payload: {
    userId: string;
    propertyId: string;
    totalPrice?: any;
    startDate?: Date;
    finishDate?: Date;
    uploadedAt?: Date;
  }) {
    return await this.reportRepository.createReport(payload);
  }

  async createReportByEmail(payload: {
    email: string;
    propertyId: string;
    type: string;
    status?: string;
    totalPrice?: any;
    startDate?: Date;
    finishDate?: Date;
    uploadedAt?: Date;
    parameters?: any;
    fileUrl?: string;
  }) {
    return await this.reportRepository.createReportByEmail(payload as any);
  }

  async getReportsByUserAndProperty(userId: string, propertyId: string) {
    return await this.reportRepository.getReportsByUserAndProperty(userId, propertyId);
  }
}
