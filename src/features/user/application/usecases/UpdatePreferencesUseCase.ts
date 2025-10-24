import { UserPreferences } from '@/features/user/domain/UserPreferences';
import { UserPreferencesRepository } from '@/features/user/infrastructure/repositories/UserPreferencesRepository';

export class UpdatePreferencesUseCase {
    constructor(private repository: UserPreferencesRepository) {}

    async execute(userId: string, preferencesData: {
        propertyTypes: string[];
        modality?: string | null;
        locations: string[];
    }): Promise<UserPreferences> {
        const existingPreferences = await this.repository.findByUserId(userId);
        if (!existingPreferences) {
            throw new Error('User preferences not found');
        }

        const updatedPreferences = new UserPreferences(
            existingPreferences.id,
            userId,
            preferencesData.propertyTypes,
            preferencesData.modality ?? null,
            preferencesData.locations,
            existingPreferences.createdAt,
            new Date()
        );

        return await this.repository.update(userId, updatedPreferences);
    }
}
