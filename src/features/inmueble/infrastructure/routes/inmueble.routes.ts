import { Router } from 'express';
import { InmuebleRepository } from '../repositories/InmuebleRepository';
import { CreateInmuebleUseCase } from '@/features/inmueble/application/usecases/CreateInmubleUseCase';
import { InmuebleController } from '../controllers/InmubleController';
import { validateSchema } from '@/shared/infrastructure/validation/validateSchema';
import { createInmuebleSchema } from '../validation/inmuebleSchema';
import { getInmuebleDetailSchema } from '../validation/inmuebleSchema';
import { authMiddleware } from '@/shared/infrastructure/middleware/AuthMiddleware';
import { GetInmuebleDetailUseCase } from '@/features/inmueble/application/usecases/GetInmuebleDetailUseCase';



const router: Router = Router();
const repo = new InmuebleRepository();
const createUseCase = new CreateInmuebleUseCase(repo);
const getDetailUseCase = new GetInmuebleDetailUseCase(repo);

const controller = new InmuebleController(createUseCase, getDetailUseCase);



router.post('/inmuebles', authMiddleware.authenticate, validateSchema(createInmuebleSchema), controller.crearInmueble);
router.get('/inmuebles', controller.listarInmuebles);
router.get('/inmuebles/:id', validateSchema(getInmuebleDetailSchema), controller.getInmuebleDetail);


export default router;
