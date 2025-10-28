import { Request, Response, RequestHandler } from 'express';
import { asyncHandler } from '@/shared/infrastructure/utils/asyncHandler';
import { ApiResponse } from '@/shared/infrastructure/utils/ApiResponse';
import { CreateInmuebleUseCase } from '@/features/inmueble/application/usecases/CreateInmubleUseCase';
import { GetInmuebleDetailUseCase } from '../../application/usecases/GetInmuebleDetailUseCase';
import { ListInmueblesUseCase } from "../../application/usecases/ListInmuebleUseCase";



function jsonReplacer(key: string, value: any) {
    return typeof value === 'bigint' ? value.toString() : value;
}

export class InmuebleController {
    constructor(
        private readonly createUseCase: CreateInmuebleUseCase,
        private readonly getDetailUseCase: GetInmuebleDetailUseCase,
        private readonly listUseCase: ListInmueblesUseCase
    ) { }


    crearInmueble: RequestHandler = asyncHandler(async (req: Request, res: Response) => {
        const user = (req as any).user;
        const payload = req.body;
        const result = await this.createUseCase.execute(payload, user);
        const jsonSafeResult = JSON.parse(JSON.stringify(result, jsonReplacer));
        res.status(201).json(ApiResponse.success(jsonSafeResult, 'Inmueble creado exitosamente'));
    });


    listInmuebles: RequestHandler = asyncHandler(async (req: Request, res: Response) => {
        const result = await this.listUseCase.execute();
        const safeResult = JSON.parse(JSON.stringify(result, jsonReplacer));
        res.status(200).json(ApiResponse.success(safeResult, "Listado de inmuebles"));
    });

    getInmuebleDetail: RequestHandler = asyncHandler(async (req: Request, res: Response) => {
        const id = req.params.id as string;
        const inmueble = await this.getDetailUseCase.execute(id);

        const safe: any = { ...inmueble };
        if (safe.price) safe.price = safe.price.toString();
        if (safe.areaM2) safe.areaM2 = safe.areaM2.toString();
        if (safe.createdAt) safe.createdAt = safe.createdAt.toISOString();
        if (safe.updatedAt) safe.updatedAt = safe.updatedAt.toISOString();

        if (safe.propertyPhotos && Array.isArray(safe.propertyPhotos)) {
            safe.propertyPhotos = safe.propertyPhotos.map((photo: any) => ({
                ...photo,
                id: photo.id.toString(),
                createdAt: photo.createdAt.toISOString(),

            }));
        }
        const jsonSafeResult = JSON.parse(JSON.stringify(safe, jsonReplacer));
        res.status(200).json(ApiResponse.success(jsonSafeResult, 'Detalle del inmueble'));
    });
}  
