import { PropertyRepository } from "../../infrastructure/repositories/PropertyRepository";
import { AppError } from "@/shared/domain/errors/AppError";

interface EditPropertyInput {
  propertyId: string;
  userId: string;
  title?: string;
  description?: string | null;
  address?: string | null;
  city?: string;
  areaM2?: number | null;
  price?: number;
  operationType?: string;
  photosToAdd?: string[];
  photosToRemove?: string[];
}

export class EditPropertyUseCase {
  constructor(private propertyRepository: PropertyRepository) {}

  async execute(input: EditPropertyInput): Promise<any> {
    const { propertyId, userId, ...updateData } = input;

    const existingProperty = await this.propertyRepository.getPropertyDetail(
      propertyId
    );
    if (!existingProperty) {
      throw new AppError("Property not found", 404);
    }

    const isOwner = await this.propertyRepository.verifyOwnership(
      propertyId,
      userId
    );
    if (!isOwner) {
      throw new AppError("Unauthorized: You do not own this property", 403);
    }

    const hasUpdates = Object.values(updateData).some(
      (value) => value !== undefined
    );
    if (!hasUpdates) {
      throw new AppError("No updates provided", 400);
    }

    const updatedProperty = await this.propertyRepository.updateProperty(
      propertyId,
      updateData
    );

    return updatedProperty;
  }
}