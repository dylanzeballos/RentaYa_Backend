import { LookupRepository } from '@/features/property/infrastructure/repositories/LookupRepository';

export class ListProvincesUseCase {
  constructor(private repo: LookupRepository) {}

  async execute() {
    return await this.repo.getProvinces();
  }
}
