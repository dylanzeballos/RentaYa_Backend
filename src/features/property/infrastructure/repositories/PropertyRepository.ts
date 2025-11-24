import prisma from "@/config/prisma";
import { Property } from "@prisma/client";

export class PropertyRepository {
  async createProperty(payload: {
    ownerId: string;
    title: string;
    description?: string | null;
    address?: string | null;
    city?: string;
    bedrooms?: number | null;
    bathrooms?: number | null;
    areaM2?: number | null;
    price: number;
    operationType: string;
    photos?: string[];
    latitude?: number | null;
    longitude?: number | null;
  }): Promise<Property> {
    const { photos, ...propertyData } = payload;

    const dataPayload: any = {
      ...propertyData,
      propertyPhotos: photos
        ? { create: photos.map((url, idx) => ({ url, order: idx + 1 })) }
        : undefined,
    };

    const created = await prisma.property.create({
      data: dataPayload,
      include: { propertyPhotos: true },
    });
    return created;
  }

  async listAllProperties(): Promise<any[]> {
    const items = await prisma.property.findMany({
      include: { propertyPhotos: true },
      orderBy: { createdAt: "desc" },
    });
    return items;
  }

  async listPropertiesByOwner(ownerId: string): Promise<any[]> {
    const items = await prisma.property.findMany({
      where: { ownerId },
      include: { propertyPhotos: true },
      orderBy: { createdAt: "desc" },
    });
    return items;
  }

  async getPropertyDetail(propertyId: string): Promise<any> {
    const property = await prisma.property.findUnique({
      where: { id: propertyId },
      include: {
        propertyPhotos: {
          orderBy: { order: "asc" },
        },
        owner: {
          select: {
            id: true,
            fullName: true,
            email: true,
            phone: true,
            profilePhoto: true,
          },
        },
      },
    });
    return property;
  }

  async updateProperty(
    propertyId: string,
    payload: {
      title?: string;
      description?: string | null;
      address?: string | null;
      city?: string;
      bedrooms?: number | null;
      bathrooms?: number | null;
      areaM2?: number | null;
      price?: number;
      operationType?: string;
      photosToAdd?: string[];
      photosToRemove?: string[];
      latitude?: number | null;
      longitude?: number | null;
    },
  ): Promise<Property> {
    const { photosToAdd, photosToRemove, ...propertyData } = payload;

    const updateData: any = {
      ...propertyData,
      updatedAt: new Date(),
    };

    if (photosToRemove && photosToRemove.length > 0) {
      await prisma.propertyPhoto.deleteMany({
        where: {
          propertyId: propertyId,
          url: { in: photosToRemove },
        },
      });
    }

    if (photosToAdd && photosToAdd.length > 0) {
      const lastPhoto = await prisma.propertyPhoto.findFirst({
        where: { propertyId: propertyId },
        orderBy: { order: "desc" },
      });

      const startOrder = lastPhoto && lastPhoto.order ? lastPhoto.order + 1 : 1;

      updateData.propertyPhotos = {
        create: photosToAdd.map((url, idx) => ({
          url,
          order: startOrder + idx,
        })),
      };
    }

    const updated = await prisma.property.update({
      where: { id: propertyId },
      data: updateData,
      include: {
        propertyPhotos: {
          orderBy: { order: "asc" },
        },
      },
    });
    return updated;
  }

  async verifyOwnership(propertyId: string, userId: string): Promise<boolean> {
    const property = await prisma.property.findUnique({
      where: { id: propertyId },
      select: { ownerId: true },
    });
    return property?.ownerId === userId;
  }

  async deleteProperty(propertyId: string): Promise<void> {
    await prisma.propertyPhoto.deleteMany({
      where: { propertyId: propertyId },
    });

    await prisma.property.delete({
      where: { id: propertyId },
    });
  }
  
}
