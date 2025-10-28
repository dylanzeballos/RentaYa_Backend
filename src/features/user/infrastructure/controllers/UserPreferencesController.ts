import { RequestHandler, Response } from 'express';
import { SavePreferencesUseCase } from '@/features/user/application/usecases/SavePreferencesUseCase';
import { GetPreferencesUseCase } from '@/features/user/application/usecases/GetPreferencesUseCase';
import { UpdatePreferencesUseCase } from '@/features/user/application/usecases/UpdatePreferencesUseCase';
import { asyncHandler } from '@/shared/infrastructure/utils/asyncHandler';
import { ApiResponse } from '@/shared/infrastructure/utils/ApiResponse';
import { AuthenticatedRequest } from '@/shared/infrastructure/middleware/AuthMiddleware';

export class UserPreferencesController {
    constructor(
        private readonly savePreferencesUseCase: SavePreferencesUseCase,
        private readonly getPreferencesUseCase: GetPreferencesUseCase,
        private readonly updatePreferencesUseCase: UpdatePreferencesUseCase
    ) {}

    savePreferences: RequestHandler = asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
        const userId = req.user?.userId;
        
        if (!userId) {
            res.status(401).json(ApiResponse.error('Usuario no autenticado'));
            return;
        }

        const result = await this.savePreferencesUseCase.execute({ ...req.body, userId });
        res.status(201).json(ApiResponse.success(result, 'Preferencias guardadas exitosamente'));
    });

    getPreferences: RequestHandler = asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
        const userId = req.user?.userId;
        
        if (!userId) {
            res.status(401).json(ApiResponse.error('Usuario no autenticado'));
            return;
        }

        const preferences = await this.getPreferencesUseCase.execute(userId);
        res.status(200).json(ApiResponse.success(preferences, 'Preferencias obtenidas exitosamente'));
    });

    updatePreferences: RequestHandler = asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
        const userId = req.user?.userId;
        
        if (!userId) {
            res.status(401).json(ApiResponse.error('Usuario no autenticado'));
            return;
        }

        const preferences = await this.updatePreferencesUseCase.execute(userId, req.body);
        res.status(200).json(ApiResponse.success(preferences, 'Preferencias actualizadas exitosamente'));
    });
}
