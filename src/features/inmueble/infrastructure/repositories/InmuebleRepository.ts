import prisma from '@/config/prisma';
import { Inmueble } from '@/generated/prisma';

export class InmuebleRepository {
    async createInmueble(payload: {
        propietarioId: string;
        titulo: string;
        descripcion?: string | null;
        direccion?: string | null;
        ciudad?: string;
        dormitorios?: number | null;
        banos?: number | null;
        areaM2?: number | null;
        precio: number;
        tipoOperacion: string;
        fotos?: string[];

    }): Promise<Inmueble> {

        const { fotos, ...inmuebleData } = payload;

        // mapear explícitamente y usar any para evitar errores estrictos de tipos
        const dataPayload: any = {
            ...inmuebleData,
            fotosInmueble: fotos
                ? { create: fotos.map((url, idx) => ({ url, orden: idx + 1 })) }
                : undefined,
        };

        const created = await prisma.inmueble.create({
            data: dataPayload,
            include: { fotosInmueble: true },
        });
        return created;
    }


    async listAllInmuebles(): Promise<any[]> {

        const items = await prisma.inmueble.findMany({
            include: { fotosInmueble: true },
            orderBy: { fechaCreacion: 'desc' },
        });
        return items;
    }



}