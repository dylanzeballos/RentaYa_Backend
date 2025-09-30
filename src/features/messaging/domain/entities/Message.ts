import { MessageContent } from '@/features/messaging/domain/value-objects/MessageContent';

export class Message {
    constructor(
        public readonly id: string,
        public readonly content: MessageContent,
        public readonly userId: string,
        public readonly createdAt: Date
    ) {}

    static create(text: string, userId: string): Message {
        return new Message(
            crypto.randomUUID(),
            new MessageContent(text),
            userId,
            new Date()
        );
    }

    isRecent(): boolean {
        const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
        return this.createdAt > oneHourAgo;
    }

    belongsToUser(userId: string): boolean {
        return this.userId === userId;
    }

    getText(): string {
        return this.content.getValue();
    }

    getWordCount(): number {
        return this.content.getWordCount();
    }
}
