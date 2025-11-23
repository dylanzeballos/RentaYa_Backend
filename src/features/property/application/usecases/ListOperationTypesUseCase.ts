import { LookupRepository } from '@/features/property/infrastructure/repositories/LookupRepository';

export class ListOperationTypesUseCase {
  constructor(private repo: LookupRepository) {}

  async execute() {
    return await this.repo.getOperationTypes();
  }
}
