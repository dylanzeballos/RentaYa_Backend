import { Router } from 'express';
import { UserPreferencesRepository } from '../repositories/UserPreferencesRepository';
import { UserPreferencesController } from '../controllers/UserPreferencesController';
import { SavePreferencesUseCase } from '@/features/user/application/usecases/SavePreferencesUseCase';
import { GetPreferencesUseCase } from '@/features/user/application/usecases/GetPreferencesUseCase';
import { UpdatePreferencesUseCase } from '@/features/user/application/usecases/UpdatePreferencesUseCase';
import { validateSchema } from '@/shared/infrastructure/validation/validateSchema';
import { preferencesSchema } from '../validation/preferencesSchema';
import { authMiddleware } from '@/shared/infrastructure/middleware/AuthMiddleware';

const router: Router = Router();
const repo = new UserPreferencesRepository();
const savePreferencesUseCase = new SavePreferencesUseCase(repo);
const getPreferencesUseCase = new GetPreferencesUseCase(repo);
const updatePreferencesUseCase = new UpdatePreferencesUseCase(repo);
const controller = new UserPreferencesController(
    savePreferencesUseCase,
    getPreferencesUseCase,
    updatePreferencesUseCase
);

router.post('/preferences', authMiddleware.authenticate, validateSchema(preferencesSchema), controller.savePreferences);
router.get('/preferences/:userId', authMiddleware.authenticate, controller.getPreferences);
router.put('/preferences/:userId', authMiddleware.authenticate, validateSchema(preferencesSchema), controller.updatePreferences);

export default router;
