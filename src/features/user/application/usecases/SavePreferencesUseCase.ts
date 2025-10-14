import { UserPreferences } from '@/features/user/domain/UserPreferences';
import { UserPreferencesRepository } from '@/features/user/infrastructure/repositories/UserPreferencesRepository';

export class SavePreferencesUseCase {
    constructor(private repository: UserPreferencesRepository) {}

    async execute(preferences: UserPreferences): Promise<UserPreferences> {
        return await this.repository.save(preferences);
    }
}
