import { OwnerRepository } from '@/features/user/infrastructure/repositories/OwnerRepository';

export class GetOwnerReportsUseCase {
    constructor(private repository: OwnerRepository) {}

    async execute(ownerId: string) {
        const reports = await this.repository.getReportsByOwner(ownerId);
        return reports;
    }
}
