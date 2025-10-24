import { UserProfileRepository } from "../../infrastructure/repositories/UserProfileRepository";
import { UserProfileResponse } from "../../domain/UserProfile";

export class GetUserProfileUseCase {
    constructor(private userProfileRepository: UserProfileRepository) {}

    async execute(userId: string): Promise<UserProfileResponse> {
        const userProfile = await this.userProfileRepository.findById(userId);

        if (!userProfile) {
            throw new Error('User profile not found');
        }

        return userProfile;
    }
}