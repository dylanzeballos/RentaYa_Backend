import { ReviewRepository } from "@/features/property/infrastructure/repositories/ReviewRepository";

type ReviewDTO = {
  id: string;
  userId: string;
  propertyId: string;
  content: string;
  rating: number;
  createdAt: string;
  user?: any;
  property?: any;
};

function serializeReview(review: any): ReviewDTO {
  return {
    id: typeof review.id === "bigint" ? review.id.toString() : String(review.id),
    userId: review.userId,
    propertyId: review.propertyId,
    content: review.content,
    rating: review.rating,
    createdAt: review.createdAt instanceof Date ? review.createdAt.toISOString() : String(review.createdAt),
    user: review.user,
    property: review.property,
  };
}

export class ReviewUseCase {
  constructor(private readonly repo: ReviewRepository) {}

  async createReview(payload: {
    userId: string;
    propertyId: string;
    content: string;
    rating: number;
  }): Promise<ReviewDTO> {
    const review = await this.repo.createReview(payload);
    return serializeReview(review);
  }

  async getReviewsByUser(userId: string): Promise<ReviewDTO[]> {
    const reviews = await this.repo.getReviewsByUser(userId);
    return (reviews || []).map(serializeReview);
  }

  async getReviewsByProperty(propertyId: string): Promise<ReviewDTO[]> {
    const reviews = await this.repo.getReviewsByProperty(propertyId);
    return (reviews || []).map(serializeReview);
  }
}
