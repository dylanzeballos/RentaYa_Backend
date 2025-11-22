import { UserPreferences } from '@/features/user/domain/UserPreferences';
import { UserPreferencesRepository } from '@/features/user/infrastructure/repositories/UserPreferencesRepository';
import { AppError } from '@/shared/domain/errors/AppError';

export class GetPreferencesUseCase {
    constructor(private repository: UserPreferencesRepository) {}

    async execute(userId: string): Promise<UserPreferences> {
        const preferences = await this.repository.findByUserId(userId);
        if (!preferences) {
            throw AppError.notFound('Preferencias del usuario no encontradas');
        }
        return preferences;
    }
}
