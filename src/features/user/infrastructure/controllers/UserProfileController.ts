import { RequestHandler, Response } from "express";
import { GetUserProfileUseCase } from "../../application/usecases/GetUserProfileUseCase";
import { UpdateUserProfileUseCase } from "../../application/usecases/UpdateUserProfileUseCase";
import { UploadProfileImageUseCase } from "../../application/usecases/UploadProfileImageUseCase";
import { DeleteUserAccountUseCase } from "../../application/usecases/DeleteUserAccountUseCase";
import { asyncHandler } from "@/shared/infrastructure/utils/asyncHandler";
import { ApiResponse } from "@/shared/infrastructure/utils/ApiResponse";
import { AuthenticatedRequest } from "@/shared/infrastructure/middleware/AuthMiddleware";

export class UserProfileController {

    constructor( 
        private readonly getUserProfileUseCase: GetUserProfileUseCase,
        private readonly updateUserProfileUseCase: UpdateUserProfileUseCase,
        private readonly uploadProfileImageUseCase: UploadProfileImageUseCase,
        private readonly deleteUserAccountUseCase: DeleteUserAccountUseCase,
    ) {}

    getProfile: RequestHandler = asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
        const userId = req.user?.userId;
        
        if (!userId) {
            res.status(401).json(ApiResponse.error('Usuario no autenticado'));
            return;
        }

        const userProfile = await this.getUserProfileUseCase.execute(userId);
        res.status(200).json(ApiResponse.success(userProfile, 'Perfil de usuario obtenido exitosamente'));
    });

    updateProfile: RequestHandler = asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
        const userId = req.user?.userId;
        
        if (!userId) {
            res.status(401).json(ApiResponse.error('Usuario no autenticado'));
            return;
        }

        const updatedProfile = await this.updateUserProfileUseCase.execute(userId, req.body);
        res.status(200).json(ApiResponse.success(updatedProfile, 'Perfil actualizado exitosamente'));
    });

    uploadProfileImage: RequestHandler = asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
        const userId = req.user?.userId;
        
        if (!userId) {
            res.status(401).json(ApiResponse.error('Usuario no autenticado'));
            return;
        }

        if (!req.file) {
            res.status(400).json(ApiResponse.error('No se proporcionó ninguna imagen'));
            return;
        }

        const updatedProfile = await this.uploadProfileImageUseCase.execute(userId, req.file);
        res.status(200).json(ApiResponse.success(updatedProfile, 'Imagen de perfil subida exitosamente'));
    });

    deleteAccount: RequestHandler = asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
        const userId = req.user?.userId;
        
        if (!userId) {
            res.status(401).json(ApiResponse.error('Usuario no autenticado'));
            return;
        }

        await this.deleteUserAccountUseCase.execute(userId);
        res.status(200).json(ApiResponse.success(null, 'Cuenta eliminada exitosamente'));
    });
}