import type {IMessageRepository} from '@/features/messaging/domain/repositories/IMessageRepository';
import type {MessageResponseDto} from '@/features/messaging/application/dtos/MessageDtos';
import { Message } from '@/features/messaging/domain/entities/Message';

export class GetMessagesUseCase {
    constructor(private messageRepository: IMessageRepository) {}

    async execute(): Promise<MessageResponseDto[]> {
        const messages = await this.messageRepository.getAll();
        return messages.map(this.toResponseDto);
    }

    async executeByUserId(userId: string): Promise<MessageResponseDto[]> {
        const messages = await this.messageRepository.getByUserId(userId);
        return messages.map(this.toResponseDto);
    }

    private toResponseDto(message: Message): MessageResponseDto {
        return {
            id: message.id,
            text: message.getText(),
            userId: message.userId,
            createdAt: message.createdAt,
            wordCount: message.getWordCount(),
            isRecent: message.isRecent()
        };
    }
}
