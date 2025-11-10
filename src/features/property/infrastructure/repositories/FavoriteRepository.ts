import prisma from "@/config/prisma";

export class FavoriteRepository {
  async addFavorite(userId: string, propertyId: string) {
    return prisma.favorite.create({ data: { userId, propertyId } });
  }

  async removeFavorite(userId: string, propertyId: string) {
    return prisma.favorite.delete({
      where: { userId_propertyId: { userId, propertyId } },
    });
  }

  async isFavorited(userId: string, propertyId: string): Promise<boolean> {
    const existing = await prisma.favorite.findUnique({
      where: { userId_propertyId: { userId, propertyId } },
      select: { id: true },
    });
    return !!existing;
  }

  async listUserFavorites(userId: string) {
    return prisma.favorite.findMany({
      where: { userId },
      include: {
        property: {
          include: { propertyPhotos: true },
        },
      },
      orderBy: { createdAt: "desc" },
    });
  }

  async propertyExists(propertyId: string): Promise<boolean> {
    const property = await prisma.property.findUnique({
      where: { id: propertyId },
      select: { id: true },
    });
    return !!property;
  }
}
