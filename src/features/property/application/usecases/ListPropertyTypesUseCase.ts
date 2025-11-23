import { LookupRepository } from '@/features/property/infrastructure/repositories/LookupRepository';

export class ListPropertyTypesUseCase {
  constructor(private repo: LookupRepository) {}

  async execute() {
    return await this.repo.getPropertyTypes();
  }
}

