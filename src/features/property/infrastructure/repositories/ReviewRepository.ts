import prisma from "@/config/prisma";
import { Review } from "@prisma/client";

export class ReviewRepository {
  async createReview(payload: {
    userId: string;
    propertyId: string;
    reportId?: string;
    content?: string;
    rating: number;
  }): Promise<Review> {
    const data = {
      userId: payload.userId,
      propertyId: payload.propertyId,
      reportId: payload.reportId || null,
      content: payload.content ?? "",
      rating: payload.rating,
    };
    const created = await prisma.review.create({
      data,
    });
    return created;
  }

  async getReviewsByUser(userId: string): Promise<Review[]> {
    const reviews = await prisma.review.findMany({
      where: { userId },
      include: { property: true },
      orderBy: { createdAt: "desc" },
    });
    return reviews;
  }

  async getReviewsByProperty(propertyId: string): Promise<Review[]> {
    const reviews = await prisma.review.findMany({
      where: { propertyId },
      include: { user: true },
      orderBy: { createdAt: "desc" },
    });
    return reviews;
  }
}
