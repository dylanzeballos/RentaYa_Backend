import { Router } from "express";
import { InterestController } from "../controllers/InterestController";
import { authMiddleware } from "@/shared/infrastructure/middleware/AuthMiddleware";
import { validateSchema } from "@/shared/infrastructure/validation/validateSchema";
import {
  createInterestSchema,
  updateInterestStatusSchema,
} from "../validation/interestSchema";

const router = Router();
const interestController = new InterestController();

/**
 * @swagger
 * /api/interests:
 *   post:
 *     summary: Mostrar interés en una propiedad
 *     tags: [Interests]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - propertyId
 *             properties:
 *               propertyId:
 *                 type: string
 *                 format: uuid
 *                 example: "123e4567-e89b-12d3-a456-426614174000"
 *               message:
 *                 type: string
 *                 maxLength: 500
 *                 example: "Me interesa esta propiedad, ¿podríamos agendar una visita?"
 *     responses:
 *       201:
 *         description: Interés creado exitosamente
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
 *                   example: Interés creado exitosamente
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                     userId:
 *                       type: string
 *                     propertyId:
 *                       type: string
 *                     message:
 *                       type: string
 *                     status:
 *                       type: string
 *                       example: pendiente
 *       400:
 *         description: Error de validación o ya existe un interés
 *       401:
 *         description: No autenticado
 *       404:
 *         description: Propiedad no encontrada
 */
router.post(
  "/",
  authMiddleware.authenticate,
  validateSchema(createInterestSchema),
  interestController.createInterest,
);

/**
 * @swagger
 * /api/interests/{interestId}/status:
 *   patch:
 *     summary: Aceptar o rechazar un interés (solo propietario)
 *     tags: [Interests]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: interestId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: ID del interés
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - status
 *             properties:
 *               status:
 *                 type: string
 *                 enum: [aceptado, rechazado]
 *                 example: aceptado
 *     responses:
 *       200:
 *         description: Estado del interés actualizado exitosamente
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
 *                   example: Interés aceptado exitosamente
 *                 data:
 *                   type: object
 *       400:
 *         description: Error de validación
 *       401:
 *         description: No autenticado
 *       403:
 *         description: No autorizado (solo el propietario puede actualizar)
 *       404:
 *         description: Interés no encontrado
 */
router.patch(
  "/:interestId/status",
  authMiddleware.authenticate,
  validateSchema(updateInterestStatusSchema),
  interestController.updateInterestStatus,
);

/**
 * @swagger
 * /api/interests/my-interests:
 *   get:
 *     summary: Obtener mis intereses (como rentante)
 *     tags: [Interests]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de intereses del usuario
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
 *                     type: object
 */
router.get(
  "/my-interests",
  authMiddleware.authenticate,
  interestController.getMyInterests,
);

/**
 * @swagger
 * /api/interests/owner/my-properties-interests:
 *   get:
 *     summary: Obtener intereses de mis propiedades (como arrendador)
 *     tags: [Interests]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de intereses en las propiedades del usuario
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
 *                     type: object
 */
router.get(
  "/owner/my-properties-interests",
  authMiddleware.authenticate,
  interestController.getOwnerInterests,
);

/**
 * @swagger
 * /api/interests/property/{propertyId}:
 *   get:
 *     summary: Obtener intereses de una propiedad específica (solo propietario)
 *     tags: [Interests]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: propertyId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: ID de la propiedad
 *     responses:
 *       200:
 *         description: Lista de intereses de la propiedad
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
 *                     type: object
 */
router.get(
  "/property/:propertyId",
  authMiddleware.authenticate,
  interestController.getPropertyInterests,
);

export default router;

