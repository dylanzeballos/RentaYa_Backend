import { Response, RequestHandler } from "express";
import { asyncHandler } from "@/shared/infrastructure/utils/asyncHandler";
import { AppError } from "@/shared/domain/errors/AppError";
import { AuthenticatedRequest } from "@/shared/infrastructure/middleware/AuthMiddleware";
import { ApiResponse } from "@/shared/infrastructure/utils/ApiResponse";
import { addFavoriteParamSchema } from "../validation/favoriteSchema";
import { FavoriteRepository } from "../repositories/FavoriteRepository";
import { AddFavoriteUseCase } from "../../application/usecases/AddFavoriteUseCase";
import { ToggleFavoriteUseCase } from "../../application/usecases/ToggleFavoriteUseCase";
import { ListUserFavoritesUseCase } from "../../application/usecases/ListUserFavoritesUseCase";

import { SerializationUtils } from "@/shared/infrastructure/utils/SerializationUtils";

export class FavoriteController {
  private addFavoriteUseCase: AddFavoriteUseCase;
  private toggleFavoriteUseCase: ToggleFavoriteUseCase;
  private listUserFavoritesUseCase: ListUserFavoritesUseCase;

  constructor() {
    const favoriteRepository = new FavoriteRepository();
    this.addFavoriteUseCase = new AddFavoriteUseCase(favoriteRepository);
    this.toggleFavoriteUseCase = new ToggleFavoriteUseCase(favoriteRepository);
    this.listUserFavoritesUseCase = new ListUserFavoritesUseCase(
      favoriteRepository,
    );
  }

  addFavorite: RequestHandler = asyncHandler(
    async (req: AuthenticatedRequest, res: Response): Promise<void> => {
      const userId = req.user?.userId;
      if (!userId) throw new AppError("Unauthorized", 401);

      const parsed = addFavoriteParamSchema.safeParse({ params: req.params });
      if (!parsed.success) {
        res
          .status(400)
          .json(ApiResponse.error("Validation error", parsed.error.issues));
        return;
      }

      const { id } = parsed.data.params;

      const result = await this.addFavoriteUseCase.execute({
        userId,
        propertyId: id,
      });

      res.status(201).json({
        success: true,
        data: SerializationUtils.serializePrismaData(result),
        message: "Property added to favorites",
      });
    },
  );

  listMyFavorites: RequestHandler = asyncHandler(
    async (req: AuthenticatedRequest, res: Response): Promise<void> => {
      const userId = req.user?.userId;
      if (!userId) throw new AppError("Unauthorized", 401);

      const result = await this.listUserFavoritesUseCase.execute(userId);

      res.status(200).json({
        success: true,
        data: SerializationUtils.serializePrismaData(result),
        message: "Favorites retrieved successfully",
      });
    },
  );

  toggleFavorite: RequestHandler = asyncHandler(
    async (req: AuthenticatedRequest, res: Response): Promise<void> => {
      const userId = req.user?.userId;
      if (!userId) throw new AppError("Unauthorized", 401);

      const parsed = addFavoriteParamSchema.safeParse({ params: req.params });
      if (!parsed.success) {
        res
          .status(400)
          .json(ApiResponse.error("Validation error", parsed.error.issues));
        return;
      }

      const { id } = parsed.data.params;

      const result = await this.toggleFavoriteUseCase.execute({
        userId,
        propertyId: id,
      });

      res.status(200).json({
        success: true,
        data: SerializationUtils.serializePrismaData(result),
        message:
          result.action === "added"
            ? "Property added to favorites"
            : "Property removed from favorites",
      });
    },
  );
}
