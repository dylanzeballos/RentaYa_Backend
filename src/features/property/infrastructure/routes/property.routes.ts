import { Router } from "express";
import { PropertyController } from "../controllers/PropertyController";
import { authMiddleware } from "@/shared/infrastructure/middleware/AuthMiddleware";
import { ImageUploadService } from "@/shared/infrastructure/services/ImageUploadService";

const router = Router();
const propertyController = new PropertyController();
const imageUploadService = new ImageUploadService();

/**
 * @swagger
 * /api/properties:
 *   get:
 *     summary: Get all properties
 *     tags: [Properties]
 *     responses:
 *       200:
 *         description: List of all properties
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Property'
 */
router.get("/", propertyController.listProperties);

/**
 * @swagger
 * /api/properties/user/my-properties:
 *   get:
 *     summary: Get current user's properties
 *     tags: [Properties]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of user's properties
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Property'
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get(
  "/user/my-properties",
  authMiddleware.authenticate,
  propertyController.getUserProperties,
);

/**
 * @swagger
 * /api/properties/{id}:
 *   get:
 *     summary: Get property by ID
 *     tags: [Properties]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Property ID
 *     responses:
 *       200:
 *         description: Property details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   $ref: '#/components/schemas/Property'
 *       404:
 *         description: Property not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get("/:id", propertyController.getPropertyDetail);

/**
 * @swagger
 * /api/properties:
 *   post:
 *     summary: Create a new property
 *     tags: [Properties]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - city
 *               - price
 *               - operationType
 *             properties:
 *               title:
 *                 type: string
 *                 example: Beautiful apartment
 *               description:
 *                 type: string
 *                 example: Spacious 2-bedroom apartment
 *               address:
 *                 type: string
 *                 example: Av. America #123
 *               city:
 *                 type: string
 *                 example: Cochabamba
 *               bedrooms:
 *                 type: integer
 *                 example: 2
 *               bathrooms:
 *                 type: integer
 *                 example: 1
 *               areaM2:
 *                 type: number
 *                 example: 85.5
 *               price:
 *                 type: number
 *                 example: 2500
 *               operationType:
 *                 type: string
 *                 enum: [rent, sale, both]
 *                 example: rent
 *               photos:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *                 description: Property photos (max 10)
 *     responses:
 *       201:
 *         description: Property created successfully
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
 *                   example: Property created successfully
 *                 data:
 *                   $ref: '#/components/schemas/Property'
 *       400:
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.post(
  "/",
  authMiddleware.authenticate,
  imageUploadService.upload.array("photos", 10),
  propertyController.createProperty,
);

/**
 * @swagger
 * /api/properties/{id}:
 *   put:
 *     summary: Update a property
 *     tags: [Properties]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Property ID
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               address:
 *                 type: string
 *               city:
 *                 type: string
 *               bedrooms:
 *                 type: integer
 *               bathrooms:
 *                 type: integer
 *               areaM2:
 *                 type: number
 *               price:
 *                 type: number
 *               operationType:
 *                 type: string
 *                 enum: [rent, sale, both]
 *               photos:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *                 description: New photos to add
 *               photosToRemove:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: URLs of photos to remove
 *     responses:
 *       200:
 *         description: Property updated successfully
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
 *                   example: Property updated successfully
 *                 data:
 *                   $ref: '#/components/schemas/Property'
 *       403:
 *         description: Not authorized to update this property
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       404:
 *         description: Property not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.put(
  "/:id",
  authMiddleware.authenticate,
  imageUploadService.upload.array("photos", 10),
  propertyController.updateProperty,
);

/**
 * @swagger
 * /api/properties/{id}:
 *   delete:
 *     summary: Delete a property
 *     tags: [Properties]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Property ID
 *     responses:
 *       200:
 *         description: Property deleted successfully
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
 *                   example: Property deleted successfully
 *       403:
 *         description: Not authorized to delete this property
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       404:
 *         description: Property not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.delete(
  "/:id",
  authMiddleware.authenticate,
  propertyController.deleteProperty,
);

export default router;
