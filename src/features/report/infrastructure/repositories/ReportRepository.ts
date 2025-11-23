import prisma from "@/config/prisma";
import { Report } from "@/generated/prisma";
import { AppError } from "@/shared/domain/errors/AppError";

export class ReportRepository {
  async createReport(payload: {
    userId: string;
    propertyId: string;
    status: string;
    totalPrice: any;
    startDate: Date;
    finishDate: Date;
  }): Promise<Report> {
    return await prisma.report.create({
      data: payload,
    });
  }
  async getById(reportId: string): Promise<Report | null> {
    return await prisma.report.findUnique({
      where: { id: reportId },
    });
  }

  async acceptReport(reportId: string): Promise<Report> {
    const report = await prisma.report.update({
      where: { id: reportId },
      data: {
        status: "Aceptado",
        uploadedAt: new Date(),
      },
    });

    return report;
  }

  async getReportsByUserAndProperty(
    userId: string,
    propertyId: string
  ): Promise<Report[]> {
    return await prisma.report.findMany({
      where: { userId, propertyId },
      orderBy: { createdAt: "desc" },
    });
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
  }): Promise<Report> {
    const { email, ...rest } = payload;
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      throw AppError.notFound(`User with email ${email} not found`);
    }

    const data: any = {
      userId: user.id,
      propertyId: rest.propertyId,
      type: rest.type,
    };

    if (rest.status !== undefined) data.status = rest.status;
    if (rest.totalPrice !== undefined) data.totalPrice = rest.totalPrice;
    if (rest.startDate !== undefined) data.startDate = rest.startDate;
    if (rest.finishDate !== undefined) data.finishDate = rest.finishDate;
    if (rest.uploadedAt !== undefined) data.uploadedAt = rest.uploadedAt;
    if (rest.parameters !== undefined) data.parameters = rest.parameters;
    if (rest.fileUrl !== undefined) data.fileUrl = rest.fileUrl;

    return await prisma.report.create({ data });
  }
}
