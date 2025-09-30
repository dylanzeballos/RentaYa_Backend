export class User {
    constructor(
        public readonly id: string,
        public readonly email: string,
        public readonly createdAt: Date
    ) {}

    static create(email: string): User {
        return new User(
            crypto.randomUUID(),
            email,
            new Date()
        );
    }

    isValidEmail(): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(this.email);
    }

    canSendMessage(): boolean {
        return this.isValidEmail();
    }

    equals(other: User): boolean {
        return this.id === other.id;
    }
}
