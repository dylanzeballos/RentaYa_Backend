import prisma from '@/config/prisma';
import { UserPreferences } from '@/features/user/domain/UserPreferences';

export class UserPreferencesRepository {
    async save(preferences: UserPreferences): Promise<UserPreferences> {
        const created = await prisma.userPreference.create({
            data: {
                userId: preferences.userId,
                propertyTypes: preferences.propertyTypes,
                modality: preferences.modality,
                locations: preferences.locations
            }
        });
        return created;
    }

    async findByUserId(userId: string): Promise<UserPreferences | null> {
        const found = await prisma.userPreference.findUnique({
            where: { userId }
        });
        return found;
    }

    async update(userId: string, preferences: UserPreferences): Promise<UserPreferences> {
        const updated = await prisma.userPreference.update({
            where: { userId },
            data: {
                userId: preferences.userId,
                propertyTypes: preferences.propertyTypes,
                modality: preferences.modality,
                locations: preferences.locations
                
            }
        });
        return updated;
    }
}
