import { ReviewRepository } from "@/features/property/infrastructure/repositories/ReviewRepository";
import { PropertyRepository } from "@/features/property/infrastructure/repositories/PropertyRepository";
import { NotificationUseCase } from "@/features/notification/application/usecases/NotificationUseCase";
import { NotificationRepository } from "@/features/notification/infrastructure/repositories/NotificationRepository";

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
    id:
      typeof review.id === "bigint" ? review.id.toString() : String(review.id),
    userId: review.userId,
    propertyId: review.propertyId,
    content: review.content,
    rating: review.rating,
    createdAt:
      review.createdAt instanceof Date
        ? review.createdAt.toISOString()
        : String(review.createdAt),
    user: review.user,
    property: review.property,
  };
}

export class ReviewUseCase {
  private propertyRepository: PropertyRepository;
  private notificationUseCase: NotificationUseCase;

  constructor(private readonly repo: ReviewRepository) {
    this.propertyRepository = new PropertyRepository();
    const notificationRepository = new NotificationRepository();
    this.notificationUseCase = new NotificationUseCase(notificationRepository);
  }

  async createReview(payload: {
    userId: string;
    propertyId: string;
    reportId?: string;
    content: string;
    rating: number;
  }): Promise<ReviewDTO> {
    const review = await this.repo.createReview(payload);

    try {
      const property = await this.propertyRepository.getPropertyDetail(
        payload.propertyId,
      );

      if (property && property.ownerId !== payload.userId) {
        await this.notificationUseCase.notifyNewReview(
          property.ownerId,
          property.title,
          payload.rating,
          payload.propertyId,
          review.id.toString(),
        );
      }
    } catch (error) {
      console.error("Error enviando notificación de reseña:", error);
    }

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
