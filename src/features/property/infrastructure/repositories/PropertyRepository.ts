import prisma from "@/config/prisma";
import { Property } from "@/generated/prisma";

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
    operationTypeId?: string | null; 
    propertyTypeId?: string | null; 
    paymentId?: string | null; 
    provinceId?: string | null; 
    photos?: string[];
    latitude?: number | null;
    longitude?: number | null;
  }): Promise<Property> {
    const { photos, ...propertyData } = payload;

    // Build payload mapping new relation fields and keeping previous simple fields
    const dataPayload: any = {
      ownerId: propertyData.ownerId,
      title: propertyData.title,
      description: propertyData.description ?? undefined,
      address: propertyData.address ?? undefined,
      city: propertyData.city ?? undefined,
      bedrooms: propertyData.bedrooms ?? undefined,
      bathrooms: propertyData.bathrooms ?? undefined,
      areaM2: propertyData.areaM2 ?? undefined,
      price: propertyData.price,
      operationTypeId: propertyData.operationTypeId ?? undefined,
      propertyTypeId: propertyData.propertyTypeId ?? undefined,
      paymentId: propertyData.paymentId ?? undefined,
      provinceId: propertyData.provinceId ?? undefined,
      latitude: propertyData.latitude ?? undefined,
      longitude: propertyData.longitude ?? undefined,
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
        payment: true
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
      operationTypeId?: string;
      propertyTypeId?: string | null;
      paymentId?: string | null;
      provinceId?: string | null;
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

  async getPropertyById(propertyId: string): Promise<any> {
    return await prisma.property.findUnique({
      where: { id: propertyId },
      select: {
        id: true,
        title: true,
        ownerId: true,
        description: true,
        address: true,
        city: true,
        price: true,
        operationType: true,
        status: true,
      },
    });
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
