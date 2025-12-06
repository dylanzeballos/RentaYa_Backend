import { Request, Response, RequestHandler } from "express";
import { CreatePropertyUseCase } from "../../application/usecases/CreatePropertyUseCase";
import { ListPropertiesUseCase } from "../../application/usecases/ListPropertiesUseCase";
import { GetPropertyDetailUseCase } from "../../application/usecases/GetPropertyDetailUseCase";
import { EditPropertyUseCase } from "../../application/usecases/EditPropertyUseCase";
import { GetUserPropertiesUseCase } from "../../application/usecases/GetUserPropertiesUseCase";
import { CheckPropertyAvailabilityUseCase } from "../../application/usecases/CheckPropertyAvailabilityUseCase";
import { PropertyRepository } from "../repositories/PropertyRepository";
import {
  createPropertySchema,
  updatePropertySchema,
} from "../validation/propertySchema";
import { ImageUploadService } from "@/shared/infrastructure/services/ImageUploadService";
import { asyncHandler } from "@/shared/infrastructure/utils/asyncHandler";
import { AppError } from "@/shared/domain/errors/AppError";
import { AuthenticatedRequest } from "@/shared/infrastructure/middleware/AuthMiddleware";
import { ApiResponse } from "@/shared/infrastructure/utils/ApiResponse";

const isValidUUID = (uuid: string): boolean => {
  const uuidRegex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  return uuidRegex.test(uuid);
};

import { SerializationUtils } from "@/shared/infrastructure/utils/SerializationUtils";

export class PropertyController {
  private createPropertyUseCase: CreatePropertyUseCase;
  private listPropertiesUseCase: ListPropertiesUseCase;
  private getPropertyDetailUseCase: GetPropertyDetailUseCase;
  private editPropertyUseCase: EditPropertyUseCase;
  private getUserPropertiesUseCase: GetUserPropertiesUseCase;
  private checkPropertyAvailabilityUseCase: CheckPropertyAvailabilityUseCase;
  private imageUploadService: ImageUploadService;

  constructor() {
    const propertyRepository = new PropertyRepository();
    this.createPropertyUseCase = new CreatePropertyUseCase(propertyRepository);
    this.listPropertiesUseCase = new ListPropertiesUseCase(propertyRepository);
    this.getPropertyDetailUseCase = new GetPropertyDetailUseCase(
      propertyRepository
    );
    this.editPropertyUseCase = new EditPropertyUseCase(propertyRepository);
    this.getUserPropertiesUseCase = new GetUserPropertiesUseCase(
      propertyRepository
    );
    this.checkPropertyAvailabilityUseCase = new CheckPropertyAvailabilityUseCase();
    this.imageUploadService = new ImageUploadService();
  }

  createProperty: RequestHandler = asyncHandler(
    async (req: AuthenticatedRequest, res: Response): Promise<void> => {
      const userId = req.user?.userId;
      if (!userId) {
        throw new AppError("Unauthorized", 401);
      }

      const validationResult = createPropertySchema.safeParse(req.body);
      if (!validationResult.success) {
        res
          .status(400)
          .json(
            ApiResponse.error("Validation error", validationResult.error.issues)
          );
        return;
      }

      let photoUrls: string[] = [];

      const photosFromBody: string[] = [];
      Object.keys(req.body).forEach((key) => {
        if (key.startsWith("photos[") && key.endsWith("]")) {
          const url = req.body[key];
          if (typeof url === "string" && url.trim() !== "") {
            photosFromBody.push(url);
          }
        }
      });

      if (photosFromBody.length > 0) {
        photoUrls = photosFromBody;
      } else if (req.body.photos && Array.isArray(req.body.photos)) {
        photoUrls = req.body.photos.filter(
          (url: string) => typeof url === "string" && url.trim() !== ""
        );
      } else if (req.files && Array.isArray(req.files)) {
        photoUrls = await Promise.all(
          req.files.map((file) =>
            this.imageUploadService.uploadImage(file, "properties")
          )
        );
      }

      const propertyData = {
        ...validationResult.data,
        ownerId: userId,
        photos: photoUrls,
      };

      const result = await this.createPropertyUseCase.execute(propertyData);

      res.status(201).json({
        success: true,
        data: SerializationUtils.serializePrismaData(result),
        message: "Property created successfully",
      });
    }
  );

  listProperties = asyncHandler(
    async (req: Request, res: Response): Promise<void> => {
      const result = await this.listPropertiesUseCase.execute();

      res.status(200).json({
        success: true,
        data: SerializationUtils.serializePrismaData(result),
        message: "Properties retrieved successfully",
      });
    }
  );

  getUserProperties = asyncHandler(
    async (req: AuthenticatedRequest, res: Response): Promise<void> => {
      const userId = req.user?.userId;
      if (!userId) {
        throw new AppError("Unauthorized", 401);
      }

      const result = await this.getUserPropertiesUseCase.execute(userId);

      res.status(200).json({
        success: true,
        data: SerializationUtils.serializePrismaData(result),
        message: "User properties retrieved successfully",
      });
    }
  );

  getPropertyDetail = asyncHandler(
    async (req: Request, res: Response): Promise<void> => {
      const { id } = req.params;

      if (!id) {
        throw new AppError("Property ID is required", 400);
      }

      if (!isValidUUID(id)) {
        throw new AppError(
          "Invalid Property ID format. Must be a valid UUID",
          400
        );
      }

      const result = await this.getPropertyDetailUseCase.execute(id);

      if (!result) {
        throw new AppError("Property not found", 404);
      }

      res.status(200).json({
        success: true,
        data: SerializationUtils.serializePrismaData(result),
        message: "Property details retrieved successfully",
      });
    }
  );

  updateProperty: RequestHandler = asyncHandler(
    async (req: AuthenticatedRequest, res: Response): Promise<void> => {
      const userId = req.user?.userId;
      if (!userId) {
        throw new AppError("Unauthorized", 401);
      }

      const { id } = req.params;
      if (!id) {
        throw new AppError("Property ID is required", 400);
      }

      if (!isValidUUID(id)) {
        throw new AppError(
          "Invalid Property ID format. Must be a valid UUID",
          400
        );
      }

      const validationResult = updatePropertySchema.safeParse(req.body);
      if (!validationResult.success) {
        res
          .status(400)
          .json(
            ApiResponse.error("Validation error", validationResult.error.issues)
          );
        return;
      }

      // Para actualización, usar photosToAdd del validationResult
      let newPhotoUrls: string[] = [];

      if (
        validationResult.data.photosToAdd &&
        Array.isArray(validationResult.data.photosToAdd)
      ) {
        newPhotoUrls = validationResult.data.photosToAdd;
      } else if (req.files && Array.isArray(req.files)) {
        newPhotoUrls = await Promise.all(
          req.files.map((file) =>
            this.imageUploadService.uploadImage(file, "properties")
          )
        );
      }

      const updateData: any = {
        propertyId: id,
        userId: userId,
        ...(validationResult.data.title && {
          title: validationResult.data.title,
        }),
        ...(validationResult.data.description !== undefined && {
          description: validationResult.data.description,
        }),
        ...(validationResult.data.address !== undefined && {
          address: validationResult.data.address,
        }),
        ...(validationResult.data.city && { city: validationResult.data.city }),
        ...(validationResult.data.areaM2 !== undefined && {
          areaM2: validationResult.data.areaM2,
        }),
        ...(validationResult.data.price && {
          price: validationResult.data.price,
        }),
        ...(validationResult.data.operationTypeId && {
          operationTypeId: validationResult.data.operationTypeId,
        }),
        ...(validationResult.data.paymentId && {
          paymentId: validationResult.data.paymentId,
        }),
        ...(validationResult.data.provinceId !== undefined && {
          provinceId: validationResult.data.provinceId,
        }),
        ...(validationResult.data.propertyTypeId !== undefined && {
          propertyTypeId: validationResult.data.propertyTypeId,
        }),
        ...(validationResult.data.latitude !== undefined && {
          latitude: validationResult.data.latitude,
        }),
        ...(validationResult.data.longitude !== undefined && {
          longitude: validationResult.data.longitude,
        }),
        photosToRemove: validationResult.data.photosToRemove,
        photosToAdd: newPhotoUrls.length > 0 ? newPhotoUrls : undefined,
      };

      const result = await this.editPropertyUseCase.execute(updateData);

      res.status(200).json({
        success: true,
        data: SerializationUtils.serializePrismaData(result),
        message: "Property updated successfully",
      });
    }
  );

  deleteProperty: RequestHandler = asyncHandler(
    async (req: AuthenticatedRequest, res: Response): Promise<void> => {
      const userId = req.user?.userId;
      if (!userId) {
        throw new AppError("Unauthorized", 401);
      }

      const { id } = req.params;
      if (!id) {
        throw new AppError("Property ID is required", 400);
      }

      if (!isValidUUID(id)) {
        throw new AppError(
          "Invalid Property ID format. Must be a valid UUID",
          400
        );
      }

      const propertyRepository = new PropertyRepository();

      const property = await propertyRepository.getPropertyDetail(id);
      if (!property) {
        throw new AppError("Property not found", 404);
      }

      const isOwner = await propertyRepository.verifyOwnership(id, userId);
      if (!isOwner) {
        throw new AppError(
          "You are not authorized to delete this property",
          403
        );
      }

      // Intentar eliminar imágenes de Cloudinary, pero no fallar si hay errores
      if (property.propertyPhotos && property.propertyPhotos.length > 0) {
        await Promise.allSettled(
          property.propertyPhotos.map(async (photo: any) => {
            try {
              await this.imageUploadService.deleteImage(photo.url);
            } catch (error: any) {
              // Registrar el error pero continuar con la eliminación
              console.warn(`Error deleting image ${photo.url}:`, error.message);
            }
          })
        );
      }

      await propertyRepository.deleteProperty(id);

      res.status(200).json({
        success: true,
        message: "Property deleted successfully",
      });
    }
  );

  checkAvailability: RequestHandler = asyncHandler(
    async (req: Request, res: Response): Promise<void> => {
      const { id } = req.params;
      const { startDate, endDate } = req.query;

      if (!id || !isValidUUID(id)) {
        throw new AppError("Invalid property ID", 400);
      }

      let start: Date | undefined;
      let end: Date | undefined;

      if (startDate && typeof startDate === "string") {
        start = new Date(startDate);
        if (isNaN(start.getTime())) {
          throw new AppError("Invalid start date format", 400);
        }
      }

      if (endDate && typeof endDate === "string") {
        end = new Date(endDate);
        if (isNaN(end.getTime())) {
          throw new AppError("Invalid end date format", 400);
        }
      }

      if (start && end && start > end) {
        throw new AppError("End date cannot be before start date", 400);
      }

      const result = await this.checkPropertyAvailabilityUseCase.execute(
        id,
        start,
        end
      );

      res.status(200).json(ApiResponse.success(result, "Availability checked successfully"));
    }
  );
}
