import { PropertyRepository } from "../../infrastructure/repositories/PropertyRepository";
import { AppError } from "@/shared/domain/errors/AppError";

export class GetPropertyDetailUseCase {
    constructor(private repo: PropertyRepository) {}
    async execute(propertyId: string) {
        const property = await this.repo.getPropertyDetail(propertyId);
        if (!property) {
            throw new AppError('Property not found', 404);
        }   
        return property;
    }
}