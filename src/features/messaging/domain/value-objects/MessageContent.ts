export class MessageContent {
    private readonly value: string;

    constructor(text: string) {
        this.validate(text);
        this.value = text.trim();
    }

    private validate(text: string): void {
        if (!text || text.trim().length === 0) {
            throw new Error('Message content cannot be empty');
        }
        if (text.trim().length > 1000) {
            throw new Error('Message content cannot exceed 1000 characters');
        }
    }

    getValue(): string {
        return this.value;
    }

    getWordCount(): number {
        return this.value.split(/\s+/).length;
    }

    equals(other: MessageContent): boolean {
        return this.value === other.value;
    }
}
