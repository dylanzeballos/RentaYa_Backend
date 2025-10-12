import { RequestHandler } from 'express';
import { CreateInmuebleUseCase } from '@/features/inmueble/application/usecases/CreateInmubleUseCase';
export declare class InmuebleController {
    private createUseCase;
    constructor(createUseCase: CreateInmuebleUseCase);
    inmueble: RequestHandler;
}
//# sourceMappingURL=InmubleController.d.ts.map