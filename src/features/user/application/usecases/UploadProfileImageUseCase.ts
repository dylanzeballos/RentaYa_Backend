import { UserProfileRepository } from "../../infrastructure/repositories/UserProfileRepository";
import { ImageUploadService } from "@/shared/infrastructure/services/ImageUploadService";
import { UserProfileResponse } from "../../domain/UserProfile";

export class UploadProfileImageUseCase {
    constructor(
        private userProfileRepository: UserProfileRepository,
        private imageUploadService: ImageUploadService
    ) {}

    async execute(userId: string, imageFile: Express.Multer.File): Promise<UserProfileResponse> {

        const existingUser = await this.userProfileRepository.findById(userId);
        if (!existingUser) {
            throw new Error('User profile not found');
        }

        // Subir la imagen a Cloudinary
        const imageUrl = await this.imageUploadService.uploadImage(imageFile, 'profile-images');

        // Si el usuario ya tiene una imagen, intentar eliminar la anterior
        if (existingUser.profilePhoto) {
            try {
                await this.imageUploadService.deleteImage(existingUser.profilePhoto);
            } catch (error) {
                // Si falla al eliminar la imagen anterior, continuar de todos modos
                console.error('Error deleting old profile image:', error);
            }
        }

        const updatedProfile = await this.userProfileRepository.updateProfileImage(userId, imageUrl);

        return updatedProfile;
    }
}