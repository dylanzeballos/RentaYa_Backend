import { Request, Response, RequestHandler } from "express";
import { ReviewUseCase } from "../../application/usecases/ReviewUseCase";
import { ReviewRepository } from "../repositories/ReviewRepository";
import { AppError } from "@/shared/domain/errors/AppError";
import { asyncHandler } from "@/shared/infrastructure/utils/asyncHandler";

/**
 * @swagger
 * tags:
 *   name: Reviews
 *   description: Gestión de reseñas de propiedades
 */

const serializeBigInt = (obj: any): any => {
  if (obj === null || obj === undefined) return obj;
  if (typeof obj === "bigint") return obj.toString();
  if (Array.isArray(obj)) return obj.map(serializeBigInt);
  if (typeof obj === "object") {
    const serialized: any = {};
    for (const key in obj) {
      serialized[key] = serializeBigInt(obj[key]);
    }
    return serialized;
  }
  return obj;
};

export class ReviewController {
  private reviewUseCase: ReviewUseCase;

  constructor() {
    const reviewRepository = new ReviewRepository();
    this.reviewUseCase = new ReviewUseCase(reviewRepository);
  }

  /**
   * @swagger
   * /api/reviews:
   *   post:
   *     summary: Crear una nueva reseña
   *     description: Crea una reseña para una propiedad. Al crear una reseña, se envía automáticamente una notificación al dueño de la propiedad.
   *     tags: [Reviews]
   *     security:
   *       - bearerAuth: []
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/CreateReviewRequest'
   *     responses:
   *       201:
   *         description: Reseña creada exitosamente
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 success:
   *                   type: boolean
   *                   example: true
   *                 data:
   *                   $ref: '#/components/schemas/Review'
   *                 message:
   *                   type: string
   *                   example: Review created successfully
   *       400:
   *         description: Datos inválidos o faltantes
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Error'
   *       401:
   *         description: No autenticado
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Error'
   *       500:
   *         description: Error del servidor
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Error'
   */
  createReview: RequestHandler = asyncHandler(
    async (req: Request, res: Response): Promise<void> => {
      const { userId, propertyId, content, rating } = req.body;
      if (!userId || !propertyId || typeof rating !== "number") {
        throw new AppError("Missing or invalid fields", 400);
      }
      const review = await this.reviewUseCase.createReview({
        userId,
        propertyId,
        content,
        rating,
      });
      res.status(201).json({
        success: true,
        data: serializeBigInt(review),
        message: "Review created successfully",
      });
    },
  );

  /**
   * @swagger
   * /api/reviews/user/{userId}:
   *   get:
   *     summary: Obtener reseñas de un usuario
   *     description: Recupera todas las reseñas creadas por un usuario específico
   *     tags: [Reviews]
   *     security:
   *       - bearerAuth: []
   *     parameters:
   *       - in: path
   *         name: userId
   *         required: true
   *         schema:
   *           type: string
   *           format: uuid
   *         description: ID del usuario
   *         example: 123e4567-e89b-12d3-a456-426614174000
   *     responses:
   *       200:
   *         description: Reseñas del usuario recuperadas exitosamente
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
   *                     $ref: '#/components/schemas/Review'
   *                 message:
   *                   type: string
   *                   example: Reviews by user retrieved successfully
   *       400:
   *         description: ID de usuario no proporcionado
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Error'
   *       401:
   *         description: No autenticado
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Error'
   *       500:
   *         description: Error del servidor
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Error'
   */
  getReviewsByUser: RequestHandler = asyncHandler(
    async (req: Request, res: Response): Promise<void> => {
      const { userId } = req.params;
      if (!userId) {
        throw new AppError("User ID is required", 400);
      }
      const reviews = await this.reviewUseCase.getReviewsByUser(userId);
      res.status(200).json({
        success: true,
        data: serializeBigInt(reviews),
        message: "Reviews by user retrieved successfully",
      });
    },
  );

  /**
   * @swagger
   * /api/reviews/property/{propertyId}:
   *   get:
   *     summary: Obtener reseñas de una propiedad
   *     description: Recupera todas las reseñas asociadas a una propiedad específica
   *     tags: [Reviews]
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
   *         example: 789e0123-e89b-12d3-a456-426614174000
   *     responses:
   *       200:
   *         description: Reseñas de la propiedad recuperadas exitosamente
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
   *                     $ref: '#/components/schemas/Review'
   *                 message:
   *                   type: string
   *                   example: Reviews by property retrieved successfully
   *       400:
   *         description: ID de propiedad no proporcionado
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Error'
   *       401:
   *         description: No autenticado
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Error'
   *       500:
   *         description: Error del servidor
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Error'
   */
  getReviewsByProperty: RequestHandler = asyncHandler(
    async (req: Request, res: Response): Promise<void> => {
      const { propertyId } = req.params;
      if (!propertyId) {
        throw new AppError("Property ID is required", 400);
      }
      const reviews = await this.reviewUseCase.getReviewsByProperty(propertyId);
      res.status(200).json({
        success: true,
        data: serializeBigInt(reviews),
        message: "Reviews by property retrieved successfully",
      });
    },
  );
}
