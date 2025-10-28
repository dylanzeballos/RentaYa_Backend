import { Router } from 'express';
import { InmuebleRepository } from '../repositories/InmuebleRepository';
import { CreateInmuebleUseCase } from '@/features/inmueble/application/usecases/CreateInmubleUseCase';
import { InmuebleController } from '../controllers/InmubleController';
import { validateSchema } from '@/shared/infrastructure/validation/validateSchema';
import { createInmuebleSchema } from '../validation/inmuebleSchema';
import { authMiddleware } from '@/shared/infrastructure/middleware/AuthMiddleware';




const router: Router = Router();
const repo = new InmuebleRepository();
const createUseCase = new CreateInmuebleUseCase(repo);
const controller = new InmuebleController(createUseCase);



router.post('/inmuebles', authMiddleware.authenticate, validateSchema(createInmuebleSchema), controller.crearInmueble);
router.get('/inmuebles', controller.listarInmuebles);

export default router;