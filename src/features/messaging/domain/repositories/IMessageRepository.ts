import { Message } from '../entities/Message';

export interface IMessageRepository {
    save(message: Message): Promise<Message>;
    getById(id: string): Promise<Message | null>;
    getByUserId(userId: string): Promise<Message[]>;
    getAll(): Promise<Message[]>;
}
