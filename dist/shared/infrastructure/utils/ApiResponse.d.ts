export declare class ApiResponse<T = any> {
    readonly success: boolean;
    readonly data: T;
    readonly message: string;
    readonly timestamp: string;
    constructor(success: boolean, data: T, message: string, timestamp?: string);
    static success<T>(data: T, message?: string): ApiResponse<T>;
    static error(message: string, data?: any): ApiResponse;
}
//# sourceMappingURL=ApiResponse.d.ts.map