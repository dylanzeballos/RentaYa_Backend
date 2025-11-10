import { Request, Response, RequestHandler } from "express";
import { ReviewUseCase } from "../../application/usecases/ReviewUseCase";
import { ReviewRepository } from "../repositories/ReviewRepository";
import { AppError } from "@/shared/domain/errors/AppError";
import { asyncHandler } from "@/shared/infrastructure/utils/asyncHandler";

const serializeBigInt = (obj: any): any => {
  if (obj === null || obj === undefined) return obj;
  if (typeof obj === "bigint") return obj.toString();
  if (Array.isArray(obj)) return obj.map(serializeBigInt);
  if (typeof obj === "object") {
    const serialized: any = {};
    for (const key in obj) {
      serialized[key] = serializeBigInt(obj[key]);
    }
    return serialized;
  }
  return obj;
};

export class ReviewController {
  private reviewUseCase: ReviewUseCase;

  constructor() {
    const reviewRepository = new ReviewRepository();
    this.reviewUseCase = new ReviewUseCase(reviewRepository);
  }

  createReview: RequestHandler = asyncHandler(
    async (req: Request, res: Response): Promise<void> => {
      const { userId, propertyId, content, rating } = req.body;
      if (!userId || !propertyId || !content || typeof rating !== "number") {
        throw new AppError("Missing or invalid fields", 400);
      }
      const review = await this.reviewUseCase.createReview({ userId, propertyId, content, rating });
      res.status(201).json({
        success: true,
        data: serializeBigInt(review),
        message: "Review created successfully",
      });
    }
  );

  getReviewsByUser: RequestHandler = asyncHandler(
    async (req: Request, res: Response): Promise<void> => {
      const { userId } = req.params;
      if (!userId) {
        throw new AppError("User ID is required", 400);
      }
      const reviews = await this.reviewUseCase.getReviewsByUser(userId);
      res.status(200).json({
        success: true,
        data: serializeBigInt(reviews),
        message: "Reviews by user retrieved successfully",
      });
    }
  );

  getReviewsByProperty: RequestHandler = asyncHandler(
    async (req: Request, res: Response): Promise<void> => {
      const { propertyId } = req.params;
      if (!propertyId) {
        throw new AppError("Property ID is required", 400);
      }
      const reviews = await this.reviewUseCase.getReviewsByProperty(propertyId);
      res.status(200).json({
        success: true,
        data: serializeBigInt(reviews),
        message: "Reviews by property retrieved successfully",
      });
    }
  );
}
