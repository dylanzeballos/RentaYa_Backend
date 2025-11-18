import { OwnerRepository } from '@/features/user/infrastructure/repositories/OwnerRepository';
import { OwnerStats } from '@/features/user/domain/OwnerStats';

export class GetOwnerStatsUseCase{
    constructor(private repository: OwnerRepository) {}
    
    async execute(userId: string): Promise<OwnerStats | null> {
        const stats = await this.repository.getByOwner(userId);
        if (!stats) {
            throw new Error('Owner not found');
        }
        return stats;
    }
}