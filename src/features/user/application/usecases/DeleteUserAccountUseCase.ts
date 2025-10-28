import { UserProfileRepository } from "../../infrastructure/repositories/UserProfileRepository";

export class DeleteUserAccountUseCase {
  constructor(private userProfileRepository: UserProfileRepository) {}

  async execute(userId: string): Promise<void> {
    const existingUser = await this.userProfileRepository.findById(userId);
    if (!existingUser) {
      throw new Error("User not found");
    }

    await this.userProfileRepository.delete(userId);
  }
}
