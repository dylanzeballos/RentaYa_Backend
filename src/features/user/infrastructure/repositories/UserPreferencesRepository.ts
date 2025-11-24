import prisma from "@/config/prisma";
import { UserPreferences } from "@/features/user/domain/UserPreferences";

export class UserPreferencesRepository {
  async save(preferences: UserPreferences): Promise<UserPreferences> {
    // Primero verificar si ya existe una preferencia para este usuario
    const existing = await prisma.userPreference.findUnique({
      where: { userId: preferences.userId },
    });

    let created;
    if (existing) {
      // Si existe, eliminar relaciones anteriores y crear nuevas
      await prisma.userPreferenceOperationType.deleteMany({
        where: { userPreferenceId: existing.id },
      });
      await prisma.userPreferencePropertyType.deleteMany({
        where: { userPreferenceId: existing.id },
      });
      await prisma.userPreferenceProvince.deleteMany({
        where: { userPreferenceId: existing.id },
      });

      created = await prisma.userPreference.update({
        where: { id: existing.id },
        data: {
          operationTypeId: preferences.operationTypes?.[0] || null,
          operationTypes: {
            create:
              preferences.operationTypes?.map((opId: string) => ({
                operationTypeId: opId,
              })) || [],
          },
          userPreferencePropertyTypes: {
            create:
              preferences.propertyTypes?.map((ptId: string) => ({
                propertyTypeId: ptId,
              })) || [],
          },
          userPreferenceProvinces: {
            create:
              preferences.provinces?.map((provId: string) => ({
                provinceId: provId,
              })) || [],
          },
        },
        include: {
          operationTypes: true,
          userPreferenceProvinces: {
            include: { province: true },
          },
          userPreferencePropertyTypes: {
            include: { propertyType: true },
          },
        },
      });
    } else {
      // Si no existe, crear nueva
      created = await prisma.userPreference.create({
        data: {
          userId: preferences.userId,
          operationTypeId: preferences.operationTypes?.[0] || null,
          operationTypes: {
            create:
              preferences.operationTypes?.map((opId: string) => ({
                operationTypeId: opId,
              })) || [],
          },
          userPreferencePropertyTypes: {
            create:
              preferences.propertyTypes?.map((ptId: string) => ({
                propertyTypeId: ptId,
              })) || [],
          },
          userPreferenceProvinces: {
            create:
              preferences.provinces?.map((provId: string) => ({
                provinceId: provId,
              })) || [],
          },
        },
        include: {
          operationTypes: true,
          userPreferenceProvinces: {
            include: { province: true },
          },
          userPreferencePropertyTypes: {
            include: { propertyType: true },
          },
        },
      });
    }
    return created as any;
  }

  async findByUserId(userId: string): Promise<UserPreferences | null> {
    const found = await prisma.userPreference.findUnique({
      where: { userId },
      include: {
        operationTypes: true,
        userPreferenceProvinces: true,
        userPreferencePropertyTypes: true,
      },
    });
    return found as any;
  }

  async update(
    userId: string,
    preferences: UserPreferences
  ): Promise<UserPreferences> {
    const updated = await prisma.userPreference.update({
      where: { userId },
      data: {},
      include: {
        operationTypes: true,
        userPreferenceProvinces: true,
        userPreferencePropertyTypes: true,
      },
    });
    return updated as any;
  }

  async findUsersMatchingProperty(
    city?: string | null,
    operationTypeId?: string | null
  ): Promise<string[]> {
    const andConditions: any[] = [];

    // Filtrar por provincia (city es el nombre de la provincia)
    if (city) {
      // Buscar usuarios que tengan esta provincia en sus preferencias
      // o que no tengan provincias seleccionadas (aceptan todas)
      andConditions.push({
        OR: [
          {
            userPreferenceProvinces: {
              some: {
                province: {
                  name: city,
                },
              },
            },
          },
          {
            userPreferenceProvinces: {
              none: {},
            },
          },
        ],
      });
    } else {
      // Si no hay ciudad, incluir usuarios sin preferencias de provincia (aceptan todas)
      andConditions.push({
        userPreferenceProvinces: {
          none: {},
        },
      });
    }

    // Filtrar por tipo de operación
    if (operationTypeId) {
      // Buscar usuarios que tengan este operationType en sus preferencias
      // o que no tengan operationTypes seleccionados (aceptan todos)
      // o que tengan operationTypeId directo
      andConditions.push({
        OR: [
          {
            operationTypes: {
              some: {
                operationTypeId: operationTypeId,
              },
            },
          },
          {
            operationTypeId: operationTypeId,
          },
          {
            operationTypeId: null,
            operationTypes: {
              none: {},
            },
          },
        ],
      });
    }
    // Si no hay operationType, no agregar condición (acepta todos los usuarios)

    const where: any = andConditions.length > 0 ? { AND: andConditions } : {};

    const found = await prisma.userPreference.findMany({
      where,
      select: { userId: true },
    });

    return found.map((f: any) => f.userId);
  }
}
