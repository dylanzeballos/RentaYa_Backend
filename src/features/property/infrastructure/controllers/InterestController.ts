import { Request, Response, RequestHandler } from "express";
import { CreateInterestUseCase } from "../../application/usecases/CreateInterestUseCase";
import { UpdateInterestStatusUseCase } from "../../application/usecases/UpdateInterestStatusUseCase";
import { InterestRepository } from "../repositories/InterestRepository";
import { asyncHandler } from "@/shared/infrastructure/utils/asyncHandler";
import { AppError } from "@/shared/domain/errors/AppError";
import { AuthenticatedRequest } from "@/shared/infrastructure/middleware/AuthMiddleware";
import { ApiResponse } from "@/shared/infrastructure/utils/ApiResponse";
import { SerializationUtils } from "@/shared/infrastructure/utils/SerializationUtils";

export class InterestController {
  private createInterestUseCase: CreateInterestUseCase;
  private updateInterestStatusUseCase: UpdateInterestStatusUseCase;
  private interestRepository: InterestRepository;

  constructor() {
    this.createInterestUseCase = new CreateInterestUseCase();
    this.updateInterestStatusUseCase = new UpdateInterestStatusUseCase();
    this.interestRepository = new InterestRepository();
  }

  createInterest: RequestHandler = asyncHandler(
    async (req: AuthenticatedRequest, res: Response) => {
      const userId = req.user?.userId;
      if (!userId) {
        throw new AppError("Usuario no autenticado", 401);
      }

      const { propertyId, message, startDate, finishDate } = req.body;

      if (!propertyId) {
        throw new AppError("propertyId es requerido", 400);
      }

      if (!startDate || !finishDate) {
        throw new AppError("startDate y finishDate son requeridos", 400);
      }

      const interest = await this.createInterestUseCase.execute({
        userId,
        propertyId,
        message,
        startDate: new Date(startDate),
        finishDate: new Date(finishDate),
      });

      res
        .status(201)
        .json(
          ApiResponse.success(
            SerializationUtils.serializePrismaData(interest),
            "Interés creado exitosamente",
          ),
        );
    },
  );

  updateInterestStatus: RequestHandler = asyncHandler(
    async (req: AuthenticatedRequest, res: Response) => {
      const userId = req.user?.userId;
      if (!userId) {
        throw new AppError("Usuario no autenticado", 401);
      }

      const { interestId } = req.params;
      const { status } = req.body;

      if (!interestId) {
        throw new AppError("interestId es requerido", 400);
      }

      if (!status || (status !== "aceptado" && status !== "rechazado")) {
        throw new AppError("status debe ser 'aceptado' o 'rechazado'", 400);
      }

      const interest = await this.updateInterestStatusUseCase.execute({
        interestId,
        status,
        ownerId: userId,
      });

      res
        .status(200)
        .json(
          ApiResponse.success(
            SerializationUtils.serializePrismaData(interest),
            `Interés ${status} exitosamente`,
          ),
        );
    },
  );

  getMyInterests: RequestHandler = asyncHandler(
    async (req: AuthenticatedRequest, res: Response) => {
      const userId = req.user?.userId;
      if (!userId) {
        throw new AppError("Usuario no autenticado", 401);
      }

      const interests = await this.interestRepository.getUserInterests(userId);

      res
        .status(200)
        .json(
          ApiResponse.success(
            SerializationUtils.serializePrismaData(interests),
            "Intereses obtenidos exitosamente",
          ),
        );
    },
  );

  getPropertyInterests: RequestHandler = asyncHandler(
    async (req: AuthenticatedRequest, res: Response) => {
      const userId = req.user?.userId;
      if (!userId) {
        throw new AppError("Usuario no autenticado", 401);
      }

      const { propertyId } = req.params;

      if (!propertyId) {
        throw new AppError("propertyId es requerido", 400);
      }

      const property =
        await this.interestRepository.getInterestById(propertyId);
      const interests =
        await this.interestRepository.getPropertyInterests(propertyId);

      res
        .status(200)
        .json(
          ApiResponse.success(
            SerializationUtils.serializePrismaData(interests),
            "Intereses de la propiedad obtenidos exitosamente",
          ),
        );
    },
  );

  getOwnerInterests: RequestHandler = asyncHandler(
    async (req: AuthenticatedRequest, res: Response) => {
      const userId = req.user?.userId;
      if (!userId) {
        throw new AppError("Usuario no autenticado", 401);
      }

      const interests =
        await this.interestRepository.getPropertyOwnerInterests(userId);

      res
        .status(200)
        .json(
          ApiResponse.success(
            SerializationUtils.serializePrismaData(interests),
            "Intereses de tus propiedades obtenidos exitosamente",
          ),
        );
    },
  );
}
