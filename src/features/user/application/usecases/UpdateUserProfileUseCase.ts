import { UserProfileRepository } from "../../infrastructure/repositories/UserProfileRepository";
import { UserProfileResponse, UpdateUserProfileData } from "../../domain/UserProfile";

export class UpdateUserProfileUseCase {
    constructor(private userProfileRepository: UserProfileRepository) {}

    async execute(userId: string, updateData: UpdateUserProfileData): Promise<UserProfileResponse> {
        const existingUser = await this.userProfileRepository.findById(userId);
        if (!existingUser) {
            throw new Error('User profile not found');
        }

        const updatedProfile = await this.userProfileRepository.update(userId, updateData);
        return updatedProfile;
    }
}