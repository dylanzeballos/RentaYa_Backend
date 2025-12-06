import { ReportRepository } from "@/features/report/infrastructure/repositories/ReportRepository";
import { PropertyRepository } from "@/features/property/infrastructure/repositories/PropertyRepository";

export class ReportUseCase {
  private reportRepository: ReportRepository;
  private propertyRepository: PropertyRepository;

  constructor(
    reportRepository: ReportRepository,
    propertyRepository: PropertyRepository
  ) {
    this.reportRepository = reportRepository;
    this.propertyRepository = propertyRepository;
  }

  async createReport(payload: {
    userId: string;
    propertyId: string;
    interestId: string,
    startDate: Date;
    finishDate: Date;
  }) {
    const property = await this.propertyRepository.getPropertyDetail(
      payload.propertyId
    );
    if (!property) {
      throw new Error("Property not found");
    }
    if (!property.payment) {
      throw new Error("Property has no payment type configured");
    }
    
    const start = new Date(payload.startDate);
    const finish = new Date(payload.finishDate);
    
    if (finish < start) {
      throw new Error("End date cannot be before start date");
    }
    
    // Normalizar fechas a medianoche para cálculo correcto de días
    start.setHours(0, 0, 0, 0);
    finish.setHours(0, 0, 0, 0);
    
    // Calcular días inclusivos: si renta del 5 al 5 = 1 día, del 5 al 6 = 2 días
    const diffMs = finish.getTime() - start.getTime();
    const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24)) + 1;

    // Validar que no haya fechas superpuestas
    const hasOverlap = await this.reportRepository.hasOverlappingDates(
      payload.propertyId,
      start,
      finish
    );
    
    if (hasOverlap) {
      throw new Error("La propiedad ya tiene una reserva o solicitud activa en estas fechas");
    }
    
    const pricePerPeriod = property.price;
    const daysPerPeriod = property.payment.days;
    const periods = totalDays / daysPerPeriod;
    const totalPrice = periods * pricePerPeriod;
    const report = {
      userId: payload.userId,
      propertyId: payload.propertyId,
      interestId: payload.interestId,
      startDate: start,
      finishDate: finish,
      uploadedAt: new Date(),
      status: "Pendiente",
      totalPrice,
    };

    return await this.reportRepository.createReport(report);
  }

  async acceptReport(payload: { interestId: string }) {
    const report = await this.reportRepository.getById(payload.interestId);
    if (!report) {
      throw new Error("Report not found");
    }
    return await this.reportRepository.acceptReport(payload.interestId);
  }

  async rejectReport(payload: { interestId: string }) {
    const report = await this.reportRepository.getById(payload.interestId);
    if (!report) {
      throw new Error("Report not found");
    }
    return await this.reportRepository.rejectReport(payload.interestId);
  }

  async getReportsByOwner(payload: { userId: string }) {
    const properties = await this.propertyRepository.findByOwnerId(
      payload.userId
    );
    const propertyIds = properties.map((p) => p.id);
    if (propertyIds.length === 0) return [];
    const reports = await this.reportRepository.getByPropertyIds(propertyIds);
    return reports;
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
    return await this.reportRepository.getReportsByUserAndProperty(
      userId,
      propertyId
    );
  }
}
