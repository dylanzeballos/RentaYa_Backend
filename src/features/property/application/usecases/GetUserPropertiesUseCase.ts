import { PropertyRepository } from "../../infrastructure/repositories/PropertyRepository";

export class GetUserPropertiesUseCase {
  constructor(private propertyRepository: PropertyRepository) {}

  async execute(userId: string): Promise<any[]> {
    const properties = await this.propertyRepository.listPropertiesByOwner(userId);
    return properties;
  }
}
