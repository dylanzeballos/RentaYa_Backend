import { FavoriteRepository } from "../../infrastructure/repositories/FavoriteRepository";
import { AppError } from "@/shared/domain/errors/AppError";

export class ToggleFavoriteUseCase {
  constructor(private favoriteRepository: FavoriteRepository) {}

  async execute(input: { userId: string; propertyId: string }) {
    const { userId, propertyId } = input;

    const exists = await this.favoriteRepository.propertyExists(propertyId);
    if (!exists) throw AppError.notFound("Property not found");

    const isFav = await this.favoriteRepository.isFavorited(
      userId,
      propertyId,
    );
    if (isFav) {
      await this.favoriteRepository.removeFavorite(userId, propertyId);
      return { action: "removed" as const };
    }
    const created = await this.favoriteRepository.addFavorite(
      userId,
      propertyId,
    );
    return { action: "added" as const, favorite: created };
  }
}
