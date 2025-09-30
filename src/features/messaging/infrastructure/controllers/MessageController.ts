import {Request, Response, NextFunction} from 'express';
import { GetMessagesUseCase } from '../../application/usecases/GetMessagesUseCase';
import { ApiResponse } from '@/shared/infrastructure/utils/ApiResponse';

export class MessageController {
    constructor(
        private getMessagesUseCase: GetMessagesUseCase
    ) {}

    async getMessages(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { userId } = req.query;

            let messages;
            if (userId) {
                messages = await this.getMessagesUseCase.executeByUserId(userId as string);
            } else {
                messages = await this.getMessagesUseCase.execute();
            }

            res.json(ApiResponse.success(messages, 'Messages retrieved successfully'));
        } catch (error) {
            next(error);
        }
    }

    async getMessageById(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { id } = req.params;
            res.json(ApiResponse.success(null, 'Feature to be implemented'));
        } catch (error) {
            next(error);
        }
    }
}
