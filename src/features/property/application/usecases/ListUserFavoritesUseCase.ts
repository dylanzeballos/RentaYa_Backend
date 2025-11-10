import { FavoriteRepository } from "../../infrastructure/repositories/FavoriteRepository";

export class ListUserFavoritesUseCase {
  constructor(private favoriteRepository: FavoriteRepository) {}

  async execute(userId: string) {
    return this.favoriteRepository.listUserFavorites(userId);
  }
}
