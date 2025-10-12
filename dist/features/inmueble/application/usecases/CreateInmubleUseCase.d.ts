import { InmuebleRepository } from '../../infrastructure/repositories/InmuebleRepository';
export declare class CreateInmuebleUseCase {
    private repo;
    constructor(repo: InmuebleRepository);
    execute(data: any, user: {
        id: String;
        rol?: string;
    }): Promise<{
        id: string;
        fechaCreacion: Date;
        fechaActualizacion: Date;
        propietarioId: string;
        titulo: string;
        descripcion: string | null;
        direccion: string | null;
        ciudad: string;
        dormitorios: number | null;
        banos: number | null;
        areaM2: import("@/generated/prisma/runtime/library").Decimal | null;
        precio: import("@/generated/prisma/runtime/library").Decimal;
        tipoOperacion: string;
        estado: string;
    }>;
}
//# sourceMappingURL=CreateInmubleUseCase.d.ts.map