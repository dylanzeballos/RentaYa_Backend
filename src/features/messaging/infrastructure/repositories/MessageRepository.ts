import { Message } from '@/features/messaging/domain/entities/Message';
import { IMessageRepository } from '@/features/messaging/domain/repositories/IMessageRepository';
import { MessageContent } from '@/features/messaging/domain/value-objects/MessageContent';
import prisma from "@/config/prisma";

export class MessageRepository implements IMessageRepository {
    async save(message: Message): Promise<Message> {
        const savedMessage = await prisma.message.create({
            data: {
                id: message.id,
                content: message.content.getValue(),
                userId: message.userId,
                createdAt: message.createdAt,
            },
        });

        return new Message(
            savedMessage.id,
            new MessageContent(savedMessage.content),
            savedMessage.userId,
            savedMessage.createdAt
        );
    }

    async getById(id: string): Promise<Message | null> {
        const message = await prisma.message.findUnique({
            where: { id }
        });

        if (!message) {
            return null;
        }

        return new Message(
            message.id,
            new MessageContent(message.content),
            message.userId,
            message.createdAt
        );
    }

    async getByUserId(userId: string): Promise<Message[]> {
        const messages = await prisma.message.findMany({
            where: { userId },
            orderBy: { createdAt: 'desc' }
        });

        return messages.map(message => new Message(
            message.id,
            new MessageContent(message.content),
            message.userId,
            message.createdAt
        ));
    }

    async getAll(): Promise<Message[]> {
        const messages = await prisma.message.findMany({
            orderBy: { createdAt: 'desc' }
        });

        return messages.map(message => new Message(
            message.id,
            new MessageContent(message.content),
            message.userId,
            message.createdAt
        ));
    }
}
