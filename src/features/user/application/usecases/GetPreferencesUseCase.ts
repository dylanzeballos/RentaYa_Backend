import { UserPreferences } from '@/features/user/domain/UserPreferences';
import { UserPreferencesRepository } from '@/features/user/infrastructure/repositories/UserPreferencesRepository';

export class GetPreferencesUseCase {
    constructor(private repository: UserPreferencesRepository) {}

    async execute(userId: string): Promise<UserPreferences | null> {
        const preferences = await this.repository.findByUserId(userId);
        if (!preferences) {
            throw new Error('User preferences not found');
        }
        return preferences;
    }
}
