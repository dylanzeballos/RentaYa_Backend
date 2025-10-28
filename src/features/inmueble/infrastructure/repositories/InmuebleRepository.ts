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

        // mapear explícitamente y usar any para evitar errores estrictos de tipos
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
}