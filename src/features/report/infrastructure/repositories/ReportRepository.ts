import prisma from "@/config/prisma";
import { Report } from "@prisma/client";
import { AppError } from "@/shared/domain/errors/AppError";

export class ReportRepository {
  async createReport(payload: {
    userId: string;
    propertyId: string;
    interestId: string;
    status: string;
    totalPrice: any;
    startDate: Date;
    finishDate: Date;
  }): Promise<Report> {
    return await prisma.report.create({
      data: payload,
    });
  }
  async getById(interestId: string): Promise<Report | null> {
    return await prisma.report.findUnique({
      where: { interestId: interestId },
    });
  }

  async acceptReport(interestId: string): Promise<Report> {
    const report = await prisma.report.update({
      where: { interestId: interestId },
      data: {
        status: "Aceptado",
        uploadedAt: new Date(),
      },
    });

    return report;
  }

  async rejectReport(interestId: string): Promise<Report> {
    const report = await prisma.report.delete({
      where: { interestId: interestId }
    });

    return report;
  }

  async getByPropertyIds(propertyIds: string[]): Promise<Report[]> {
    return prisma.report.findMany({
      where: {
        propertyId: { in: propertyIds },
      },
      orderBy: { createdAt: "desc" },
    });
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

  async hasOverlappingDates(
    propertyId: string,
    startDate: Date,
    finishDate: Date
  ): Promise<boolean> {
    const overlappingReports = await prisma.report.findMany({
      where: {
        propertyId: propertyId,
        status: {
          in: ["Aceptado", "Pendiente"]
        },
        OR: [
          {
            AND: [
              { startDate: { lte: startDate } },
              { finishDate: { gte: startDate } }
            ]
          },
          {
            AND: [
              { startDate: { lte: finishDate } },
              { finishDate: { gte: finishDate } }
            ]
          },
          {
            AND: [
              { startDate: { gte: startDate } },
              { finishDate: { lte: finishDate } }
            ]
          }
        ]
      }
    });

    return overlappingReports.length > 0;
  }
}
