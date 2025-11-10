import { AppError } from "@/shared/domain/errors/AppError";
import { FavoriteRepository } from "../../infrastructure/repositories/FavoriteRepository";

export class AddFavoriteUseCase {
  constructor(private favoriteRepository: FavoriteRepository) {}

  async execute(input: { userId: string; propertyId: string }) {
    const { userId, propertyId } = input;

    const exists = await this.favoriteRepository.propertyExists(propertyId);
    if (!exists) {
      throw AppError.notFound("Property not found");
    }

    const already = await this.favoriteRepository.isFavorited(
      userId,
      propertyId,
    );
    if (already) {
      throw AppError.conflict("Property is already in favorites");
    }

    const created = await this.favoriteRepository.addFavorite(
      userId,
      propertyId,
    );
    return created;
  }
}
