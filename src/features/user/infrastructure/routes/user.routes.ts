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

/**
 * @swagger
 * /api/users/profile:
 *   get:
 *     summary: Get current user profile
 *     tags: [User Profile]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User profile retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   $ref: '#/components/schemas/User'
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get('/profile', authMiddleware.authenticate, userProfileController.getProfile);

/**
 * @swagger
 * /api/users/profile:
 *   put:
 *     summary: Update user profile
 *     tags: [User Profile]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fullName:
 *                 type: string
 *                 example: John Doe
 *               phone:
 *                 type: string
 *                 example: +591 70123456
 *     responses:
 *       200:
 *         description: Profile updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Profile updated successfully
 *                 data:
 *                   $ref: '#/components/schemas/User'
 *       400:
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.put('/profile', authMiddleware.authenticate, validateSchema(updateUserProfileSchema), userProfileController.updateProfile);

/**
 * @swagger
 * /api/users/profile/image:
 *   post:
 *     summary: Upload profile image
 *     tags: [User Profile]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - profileImage
 *             properties:
 *               profileImage:
 *                 type: string
 *                 format: binary
 *                 description: Profile image file
 *     responses:
 *       200:
 *         description: Profile image uploaded successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Profile image uploaded successfully
 *                 data:
 *                   $ref: '#/components/schemas/User'
 *       400:
 *         description: No file uploaded
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.post('/profile/image', authMiddleware.authenticate, imageUploadService.upload.single('profileImage'), userProfileController.uploadProfileImage);

/**
 * @swagger
 * /api/users/account:
 *   delete:
 *     summary: Delete user account
 *     tags: [User Profile]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Account deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Account deleted successfully
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.delete('/account', authMiddleware.authenticate, userProfileController.deleteAccount);

// Preferences Routes

/**
 * @swagger
 * /api/users/preferences:
 *   post:
 *     summary: Save user preferences
 *     tags: [User Preferences]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - propertyTypes
 *               - locations
 *             properties:
 *               propertyTypes:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["apartment", "house"]
 *               modality:
 *                 type: string
 *                 example: rent
 *               locations:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["Cochabamba", "La Paz"]
 *     responses:
 *       201:
 *         description: Preferences saved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Preferences saved successfully
 *                 data:
 *                   $ref: '#/components/schemas/UserPreference'
 */
router.post('/preferences', authMiddleware.authenticate, userPreferencesController.savePreferences);

/**
 * @swagger
 * /api/users/preferences:
 *   get:
 *     summary: Get user preferences
 *     tags: [User Preferences]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Preferences retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   $ref: '#/components/schemas/UserPreference'
 *       404:
 *         description: Preferences not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get('/preferences', authMiddleware.authenticate, userPreferencesController.getPreferences);

/**
 * @swagger
 * /api/users/preferences:
 *   put:
 *     summary: Update user preferences
 *     tags: [User Preferences]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               propertyTypes:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["apartment", "house"]
 *               modality:
 *                 type: string
 *                 example: rent
 *               locations:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["Cochabamba", "La Paz"]
 *     responses:
 *       200:
 *         description: Preferences updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Preferences updated successfully
 *                 data:
 *                   $ref: '#/components/schemas/UserPreference'
 */
router.put('/preferences', authMiddleware.authenticate, userPreferencesController.updatePreferences);

export default router;
