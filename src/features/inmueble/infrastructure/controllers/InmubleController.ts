import { Request, Response, RequestHandler } from 'express';
import { asyncHandler } from '@/shared/infrastructure/utils/asyncHandler';
import { ApiResponse } from '@/shared/infrastructure/utils/ApiResponse';
import { CreateInmuebleUseCase } from '@/features/inmueble/application/usecases/CreateInmubleUseCase';

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
}
