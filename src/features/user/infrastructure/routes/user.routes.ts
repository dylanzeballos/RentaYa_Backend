import { Router } from 'express';
import { UserPreferencesController } from '../controllers/UserPreferencesController';
import { authMiddleware } from '@/shared/infrastructure/middleware/AuthMiddleware';
import { UserProfileController } from '../controllers/UserProfileController';
import { UserProfileRepository } from '../repositories/UserProfileRepository';
import { UserPreferencesRepository } from '../repositories/UserPreferencesRepository';
import { GetUserProfileUseCase } from '../../application/usecases/GetUserProfileUseCase';
import { UpdateUserProfileUseCase } from '../../application/usecases/UpdateUserProfileUseCase';
import { UploadProfileImageUseCase } from '../../application/usecases/UploadProfileImageUseCase';
import { DeleteUserAccountUseCase } from '../../application/usecases/DeleteUserAccountUseCase';
import { GetPreferencesUseCase } from '../../application/usecases/GetPreferencesUseCase';
import { SavePreferencesUseCase } from '../../application/usecases/SavePreferencesUseCase';
import { UpdatePreferencesUseCase } from '../../application/usecases/UpdatePreferencesUseCase';
import { ImageUploadService } from '@/shared/infrastructure/services/ImageUploadService';
import { validateSchema } from '@/shared/infrastructure/validation/validateSchema';
import { updateUserProfileSchema } from '../validation/userProfileSchema';

const router: Router = Router();

// Repositories
const userProfileRepository = new UserProfileRepository();
const userPreferencesRepository = new UserPreferencesRepository();

// Services
const imageUploadService = new ImageUploadService();

// Use Cases - Profile
const getUserProfileUseCase = new GetUserProfileUseCase(userProfileRepository);
const updateUserProfileUseCase = new UpdateUserProfileUseCase(userProfileRepository);
const uploadProfileImageUseCase = new UploadProfileImageUseCase(userProfileRepository, imageUploadService);
const deleteUserAccountUseCase = new DeleteUserAccountUseCase(userProfileRepository);

// Use Cases - Preferences
const getPreferencesUseCase = new GetPreferencesUseCase(userPreferencesRepository);
const savePreferencesUseCase = new SavePreferencesUseCase(userPreferencesRepository);
const updatePreferencesUseCase = new UpdatePreferencesUseCase(userPreferencesRepository);

// Controllers
const userProfileController = new UserProfileController(
    getUserProfileUseCase,
    updateUserProfileUseCase,
    uploadProfileImageUseCase,
    deleteUserAccountUseCase
);

const userPreferencesController = new UserPreferencesController(
    savePreferencesUseCase,
    getPreferencesUseCase,
    updatePreferencesUseCase
);

// Profile Routes
router.get('/profile', authMiddleware.authenticate, userProfileController.getProfile);
router.put('/profile', authMiddleware.authenticate, validateSchema(updateUserProfileSchema), userProfileController.updateProfile);
router.post('/profile/image', authMiddleware.authenticate, imageUploadService.upload.single('profileImage'), userProfileController.uploadProfileImage);
router.delete('/account', authMiddleware.authenticate, userProfileController.deleteAccount);

// Preferences Routes
router.post('/preferences', authMiddleware.authenticate, userPreferencesController.savePreferences);
router.get('/preferences', authMiddleware.authenticate, userPreferencesController.getPreferences);
router.put('/preferences', authMiddleware.authenticate, userPreferencesController.updatePreferences);

export default router;
