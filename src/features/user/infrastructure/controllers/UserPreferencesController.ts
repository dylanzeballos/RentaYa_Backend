import { Request, Response } from 'express';
import { SavePreferencesUseCase } from '@/features/user/application/usecases/SavePreferencesUseCase';
import { GetPreferencesUseCase } from '@/features/user/application/usecases/GetPreferencesUseCase';
import { UpdatePreferencesUseCase } from '@/features/user/application/usecases/UpdatePreferencesUseCase';

export class UserPreferencesController {
    constructor(
        private savePreferencesUseCase: SavePreferencesUseCase,
        private getPreferencesUseCase: GetPreferencesUseCase,
        private updatePreferencesUseCase: UpdatePreferencesUseCase
    ) {}

    savePreferences = async (req: Request, res: Response) => {
        try {
            const result = await this.savePreferencesUseCase.execute(req.body);
            res.status(201).json(result);
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Internal server error';
            res.status(500).json({ message: errorMessage });
        }
    };

    getPreferences = async (req: Request, res: Response) => {
        try {
            const { userId } = req.params;
            if (!userId) {
                return res.status(400).json({ message: 'userId parameter is required' });
            }
            const preferences = await this.getPreferencesUseCase.execute(userId);
            res.status(200).json(preferences);
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Internal server error';
            res.status(500).json({ message: errorMessage });
        }
    };

    updatePreferences = async (req: Request, res: Response) => {
        try {
            const { userId } = req.params;
            if (!userId) {
                return res.status(400).json({ message: 'userId parameter is required' });
            }
            const preferences = await this.updatePreferencesUseCase.execute(userId, req.body);
            res.status(200).json(preferences);
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Internal server error';
            res.status(500).json({ message: errorMessage });
        }
    };
}
