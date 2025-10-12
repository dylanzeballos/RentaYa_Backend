import { Request, Response, RequestHandler } from 'express';
import { asyncHandler } from '@/shared/infrastructure/utils/asyncHandler';
import { ApiResponse } from '@/shared/infrastructure/utils/ApiResponse';
import { CreateInmuebleUseCase } from '@/features/inmueble/application/usecases/CreateInmubleUseCase';
import prisma from '@/config/prisma';
function jsonReplacer(key: string, value: any) {
    return typeof value === 'bigint' ? value.toString() : value;
}

export class InmuebleController {
    constructor(private readonly createUseCase: CreateInmuebleUseCase) { }


    crearInmueble: RequestHandler = asyncHandler(async (req: Request, res: Response) => {
        const user = (req as any).user; // usuario autenticado (token)
        const payload = req.body;       // datos enviados desde el frontend o Postman
        const result = await this.createUseCase.execute(payload, user);

        // Convertimos BigInt a string antes de responder
        const jsonSafeResult = JSON.parse(JSON.stringify(result, jsonReplacer));
        res.status(201).json(ApiResponse.success(jsonSafeResult, 'Inmueble creado exitosamente'));
    });


    listarInmuebles: RequestHandler = asyncHandler(async (req: Request, res: Response) => {
        const items = await prisma.inmueble.findMany({
            include: { fotosInmueble: true },
            orderBy: { fechaCreacion: 'desc' },
        });

        const safe = (items || []).map((item: any) => {
            const copy: any = { ...item };
            if (copy.precio && typeof copy.precio.toString === 'function') copy.precio = copy.precio.toString();
            if (copy.areaM2 && typeof copy.areaM2.toString === 'function') copy.areaM2 = copy.areaM2.toString();
            if (copy.fechaCreacion instanceof Date) copy.fechaCreacion = copy.fechaCreacion.toISOString();
            if (copy.fechaActualizacion instanceof Date) copy.fechaActualizacion = copy.fechaActualizacion.toISOString();
            return copy;
        });

        const payload = { items: safe, total: safe.length };
        // Convertir BigInt a string antes de que Express haga JSON.stringify
        const safePayload = JSON.parse(JSON.stringify(payload, jsonReplacer));
        res.status(200).json(ApiResponse.success(safePayload, 'Listado inmuebles'));
    })
}  
