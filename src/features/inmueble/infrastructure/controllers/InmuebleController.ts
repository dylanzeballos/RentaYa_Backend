import { Request, Response, RequestHandler } from "express";
import { CreateInmuebleUseCase } from "../../application/usecases/CreateInmubleUseCase";
import { ListInmueblesUseCase } from "../../application/usecases/ListInmuebleUseCase";
import { GetInmuebleDetailUseCase } from "../../application/usecases/GetInmuebleDetailUseCase";
import { EditPropertyUseCase } from "../../application/usecases/EditPropertyUseCase";
import { InmuebleRepository } from "../repositories/InmuebleRepository";
import {
  createInmuebleSchema,
  updateInmuebleSchema,
} from "../validation/inmuebleSchema";
import { ImageUploadService } from "@/shared/infrastructure/services/ImageUploadService";
import { asyncHandler } from "@/shared/infrastructure/utils/asyncHandler";
import { AppError } from "@/shared/domain/errors/AppError";
import { AuthenticatedRequest } from "@/shared/infrastructure/middleware/AuthMiddleware";
import { ApiResponse } from "@/shared/infrastructure/utils/ApiResponse";

const isValidUUID = (uuid: string): boolean => {
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  return uuidRegex.test(uuid);
};

const serializeBigInt = (obj: any): any => {
  if (obj === null || obj === undefined) return obj;
  
  if (typeof obj === 'bigint') {
    return obj.toString();
  }
  
  if (Array.isArray(obj)) {
    return obj.map(serializeBigInt);
  }
  
  if (typeof obj === 'object') {
    const serialized: any = {};
    for (const key in obj) {
      serialized[key] = serializeBigInt(obj[key]);
    }
    return serialized;
  }
  
  return obj;
};

export class InmuebleController {
  private createInmubleUseCase: CreateInmuebleUseCase;
  private listInmuebleUseCase: ListInmueblesUseCase;
  private getInmuebleDetailUseCase: GetInmuebleDetailUseCase;
  private editPropertyUseCase: EditPropertyUseCase;
  private imageUploadService: ImageUploadService;

  constructor() {
    const inmuebleRepository = new InmuebleRepository();
    this.createInmubleUseCase = new CreateInmuebleUseCase(inmuebleRepository);
    this.listInmuebleUseCase = new ListInmueblesUseCase(inmuebleRepository);
    this.getInmuebleDetailUseCase = new GetInmuebleDetailUseCase(
      inmuebleRepository
    );
    this.editPropertyUseCase = new EditPropertyUseCase(inmuebleRepository);
    this.imageUploadService = new ImageUploadService();
  }

  createInmueble: RequestHandler = asyncHandler(
    async (req: AuthenticatedRequest, res: Response): Promise<void> => {
      const userId = req.user?.userId;
      if (!userId) {
        throw new AppError("Unauthorized", 401);
      }

      const validationResult = createInmuebleSchema.safeParse(req.body);
      if (!validationResult.success) {
        res.status(400).json(
          ApiResponse.error("Validation error", validationResult.error.issues)
        );
        return;
      }

      let photoUrls: string[] = [];
      if (req.files && Array.isArray(req.files)) {
        photoUrls = await Promise.all(
          req.files.map((file) =>
            this.imageUploadService.uploadImage(file, "properties")
          )
        );
      }

      const inmuebleData = {
        ...validationResult.data,
        ownerId: userId,
        photos: photoUrls,
      };

      const result = await this.createInmubleUseCase.execute(inmuebleData);

      res.status(201).json({
        success: true,
        data: serializeBigInt(result),
        message: "Property created successfully",
      });
    }
  );

  listInmuebles = asyncHandler(
    async (req: Request, res: Response): Promise<void> => {
      const result = await this.listInmuebleUseCase.execute();

      res.status(200).json({
        success: true,
        data: serializeBigInt(result),
        message: "Properties retrieved successfully",
      });
    }
  );

  getInmuebleDetail = asyncHandler(
    async (req: Request, res: Response): Promise<void> => {
      const { id } = req.params;

      if (!id) {
        throw new AppError("Property ID is required", 400);
      }

      if (!isValidUUID(id)) {
        throw new AppError("Invalid Property ID format. Must be a valid UUID", 400);
      }

      const result = await this.getInmuebleDetailUseCase.execute(id);

      if (!result) {
        throw new AppError("Property not found", 404);
      }

      res.status(200).json({
        success: true,
        data: serializeBigInt(result),
        message: "Property details retrieved successfully",
      });
    }
  );

  updateInmueble: RequestHandler = asyncHandler(
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
        throw new AppError("Invalid Property ID format. Must be a valid UUID", 400);
      }

      const validationResult = updateInmuebleSchema.safeParse(req.body);
      if (!validationResult.success) {
        res.status(400).json(
          ApiResponse.error("Validation error", validationResult.error.issues)
        );
        return;
      }

      let newPhotoUrls: string[] = [];
      if (req.files && Array.isArray(req.files)) {
        newPhotoUrls = await Promise.all(
          req.files.map((file) =>
            this.imageUploadService.uploadImage(file, "properties")
          )
        );
      }

      const updateData: any = {
        inmuebleId: id,
        userId: userId,
        ...(validationResult.data.title && { title: validationResult.data.title }),
        ...(validationResult.data.description !== undefined && { description: validationResult.data.description }),
        ...(validationResult.data.address !== undefined && { address: validationResult.data.address }),
        ...(validationResult.data.city && { city: validationResult.data.city }),
        ...(validationResult.data.bedrooms !== undefined && { bedrooms: validationResult.data.bedrooms }),
        ...(validationResult.data.bathrooms !== undefined && { bathrooms: validationResult.data.bathrooms }),
        ...(validationResult.data.areaM2 !== undefined && { areaM2: validationResult.data.areaM2 }),
        ...(validationResult.data.price && { price: validationResult.data.price }),
        ...(validationResult.data.operationType && { operationType: validationResult.data.operationType }),
        ...(validationResult.data.photosToRemove && { photosToRemove: validationResult.data.photosToRemove }),
        ...(newPhotoUrls.length > 0 && { photosToAdd: newPhotoUrls }),
      };

      const result = await this.editPropertyUseCase.execute(updateData);

      res.status(200).json({
        success: true,
        data: serializeBigInt(result),
        message: "Property updated successfully",
      });
    }
  );

  deleteInmueble: RequestHandler = asyncHandler(
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
        throw new AppError("Invalid Property ID format. Must be a valid UUID", 400);
      }

      const inmuebleRepository = new InmuebleRepository();

      const inmueble = await inmuebleRepository.detailInmueble(id);
      if (!inmueble) {
        throw new AppError("Property not found", 404);
      }

      const isOwner = await inmuebleRepository.verifyOwnership(id, userId);
      if (!isOwner) {
        throw new AppError(
          "You are not authorized to delete this property",
          403
        );
      }

      if (inmueble.propertyPhotos && inmueble.propertyPhotos.length > 0) {
        await Promise.all(
          inmueble.propertyPhotos.map((photo: any) =>
            this.imageUploadService.deleteImage(photo.url)
          )
        );
      }

      await inmuebleRepository.deleteInmueble(id);

      res.status(200).json({
        success: true,
        message: "Property deleted successfully",
      });
    }
  );
}
