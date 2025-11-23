import { ReportRepository } from "@/features/report/infrastructure/repositories/ReportRepository";
import { PropertyRepository } from "@/features/property/infrastructure/repositories/PropertyRepository";

export class ReportUseCase {
  private reportRepository: ReportRepository;
  private propertyRepository: PropertyRepository;

  constructor(reportRepository: ReportRepository) {
    this.reportRepository = reportRepository;
    this.propertyRepository = propertyRepository;
  }

  async createReport(payload: {
    userId: string;
    propertyId: string;
    startDate: Date;
    finishDate: Date;
  }) {
    const property = await this.propertyRepository.findById(payload.propertyId);
    if (!property) {
      throw new Error("Property not found");
    }
    const pricePerDay = property.price;

    const start = new Date(payload.startDate);
    const finish = new Date(payload.finishDate);

    const diffMs = finish.getTime() - start.getTime();
    const days = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

    if (days <= 0) {
      throw new Error("Invalid date range");
    }

    const totalPrice = pricePerDay * days;

    const report = {
      userId: payload.userId,
      propertyId: payload.propertyId,
      startDate: start,
      finishDate: finish,
      uploadedAt: new Date(),
      status: "pendiente",
      totalPrice
    };
    return await this.reportRepository.createReport(report);
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
