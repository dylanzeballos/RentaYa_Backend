import { InmuebleRepository } from "../../infrastructure/repositories/InmuebleRepository";
import { AppError } from "@/shared/domain/errors/AppError";

interface EditPropertyInput {
  inmuebleId: string;
  userId: string;
  title?: string;
  description?: string | null;
  address?: string | null;
  city?: string;
  bedrooms?: number | null;
  bathrooms?: number | null;
  areaM2?: number | null;
  price?: number;
  operationType?: string;
  photosToAdd?: string[];
  photosToRemove?: string[];
}

export class EditPropertyUseCase {
  constructor(private inmuebleRepository: InmuebleRepository) {}

  async execute(input: EditPropertyInput): Promise<any> {
    const { inmuebleId, userId, ...updateData } = input;

    const existingInmueble = await this.inmuebleRepository.detailInmueble(
      inmuebleId
    );
    if (!existingInmueble) {
      throw new AppError("Inmueble not found", 404);
    }

    const isOwner = await this.inmuebleRepository.verifyOwnership(
      inmuebleId,
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

    const updatedInmueble = await this.inmuebleRepository.updateInmueble(
      inmuebleId,
      updateData
    );

    return updatedInmueble;
  }
}