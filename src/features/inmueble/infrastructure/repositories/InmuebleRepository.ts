import prisma from '@/config/prisma';
import { Inmueble } from '@/generated/prisma';

export class InmuebleRepository {
    async createInmueble(payload: {
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

    }): Promise<Inmueble> {

        const { photos, ...inmuebleData } = payload;

        const dataPayload: any = {
            ...inmuebleData,
            propertyPhotos: photos
                ? { create: photos.map((url, idx) => ({ url, order: idx + 1 })) }
                : undefined,
        };

        const created = await prisma.inmueble.create({
            data: dataPayload,
            include: { propertyPhotos: true },
        });
        return created;
    }


    async listAllInmuebles(): Promise<any[]> {

        const items = await prisma.inmueble.findMany({
            include: { propertyPhotos: true },
            orderBy: { createdAt: 'desc' },
        });
        return items;
    }

    async detailInmueble(inmuebleId: string): Promise<any> {
        const inmueble = await prisma.inmueble.findUnique({
            where: { id: inmuebleId },
            include: {
                propertyPhotos: {
                    orderBy: { order: 'asc' }

                },
                owner: {
                    select: {
                        id: true,
                        fullName: true,
                        email: true,
                        phone: true,
                        profilePhoto: true,
                    }
                }
            }
        });
        return inmueble;
    }

    async updateInmueble(inmuebleId: string, payload: {
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
    }): Promise<Inmueble> {
        const { photosToAdd, photosToRemove, ...inmuebleData} = payload;

        const updateData: any = {
            ...inmuebleData,
            updatedAt: new Date(),
        };

        if (photosToRemove && photosToRemove.length > 0) {
            await prisma.fotoInmueble.deleteMany({
                where:  {
                    propertyId: inmuebleId,
                    url: { in: photosToRemove }
                }
            });
        }

        if (photosToAdd && photosToAdd.length > 0) {
            const lastPhoto = await prisma.fotoInmueble.findFirst({
                where: { propertyId: inmuebleId },
                orderBy: { order: 'desc' }
            });

            const startOrder = lastPhoto && lastPhoto.order ? lastPhoto.order + 1 : 1;

            updateData.propertyPhotos = {
                create: photosToAdd.map((url, idx) => ({
                    url,
                    order: startOrder + idx
                }))
            };
        }

        const updated = await prisma.inmueble.update({
            where: { id: inmuebleId },
            data: updateData,
            include: {
                propertyPhotos: {
                    orderBy: { order: 'asc' }
                }
            },
        });
        return updated;
    }

    async verifyOwnership(inmuebleId: string, userId: string): Promise<boolean> {
        const inmueble = await prisma.inmueble.findUnique({
            where: { id: inmuebleId },
            select: { ownerId: true },
        });
        return inmueble?.ownerId === userId;
    }

    async deleteInmueble(inmuebleId: string): Promise<void> {
        await prisma.fotoInmueble.deleteMany({
            where:{ propertyId: inmuebleId }
        });

        await prisma.inmueble.delete({
            where: { id: inmuebleId },
        });
    }
}