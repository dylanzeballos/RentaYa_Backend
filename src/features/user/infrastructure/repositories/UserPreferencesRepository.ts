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

    async findUsersMatchingProperty(
        city?: string | null,
        operationType?: string | null,
    ): Promise<string[]> {
        const andConditions: any[] = [];

        // Filtrar por ciudad
        if (city) {
            andConditions.push({
                OR: [
                    { locations: { has: city } }, 
                    { locations: { isEmpty: true } }, 
                ],
            });
        }

        // Filtrar por tipo de operación
        if (operationType) {
            andConditions.push({
                OR: [
                    { modality: operationType },
                    { modality: null },          
                    { modality: "" },
                ],
            });
        }

        const where: any = andConditions.length > 0 ? { AND: andConditions } : {};

        const found = await prisma.userPreference.findMany({
            where,
            select: { userId: true },
        });

        return found.map((f: any) => f.userId);
    }
}
