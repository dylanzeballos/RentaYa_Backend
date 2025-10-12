import { Inmueble } from '@/generated/prisma';
export declare class InmuebleRepository {
    createInmueble(payload: {
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
    }): Promise<Inmueble>;
}
//# sourceMappingURL=InmuebleRepository.d.ts.map