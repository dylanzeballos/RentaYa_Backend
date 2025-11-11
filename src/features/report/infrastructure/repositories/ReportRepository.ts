import prisma from "@/config/prisma";
import { Report } from "@/generated/prisma";

export class ReportRepository {
  async createReport(payload: {
    userId: string;
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
    return await prisma.report.create({
      data: payload,
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
}
