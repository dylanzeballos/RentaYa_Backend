export declare class HashService {
    private readonly saltRounds;
    hash(password: string): Promise<string>;
    compare(password: string, hash: string): Promise<boolean>;
}
//# sourceMappingURL=HashService.d.ts.map