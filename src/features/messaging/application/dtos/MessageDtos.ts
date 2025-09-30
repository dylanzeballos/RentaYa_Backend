export interface SendMessageDto {
    userId: string;
    text: string;
}

export interface MessageResponseDto {
    id: string;
    text: string;
    userId: string;
    createdAt: Date;
    wordCount: number;
    isRecent: boolean;
}
