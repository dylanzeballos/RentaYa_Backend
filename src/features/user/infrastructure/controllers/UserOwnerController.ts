import { RequestHandler, Response } from "express";
import { GetOwnerStatsUseCase } from "../../application/usecases/GetOwnerStatsUseCase";
import { asyncHandler } from "@/shared/infrastructure/utils/asyncHandler";
import { ApiResponse } from "@/shared/infrastructure/utils/ApiResponse";
import { AuthenticatedRequest } from "@/shared/infrastructure/middleware/AuthMiddleware";

export class UserOwnerController {

    constructor(
        private readonly getOwnerStatsUseCase: GetOwnerStatsUseCase,
    ) {}

    getOwnerPropertyStats: RequestHandler = asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
        const userId = req.user?.userId;
        if (!userId) {
            res.status(401).json(ApiResponse.error('Usuario no autenticado'));
            return;
        }
        const stats = await this.getOwnerStatsUseCase.execute(userId);
        res.status(200).json(ApiResponse.success(stats, 'Estadísticas de propietario cargadas correctamente'));
    });
}