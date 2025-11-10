import { PropertyRepository } from '../../infrastructure/repositories/PropertyRepository';
import { AppError } from '@/shared/domain/errors/AppError';

export class CreatePropertyUseCase {
    constructor(private repo: PropertyRepository) {}

    async execute(data: any) {
        if (!data.ownerId) {
            throw new AppError('Authentication required', 401);
        }

        const created = await this.repo.createProperty(data);
        return created;
    }
}