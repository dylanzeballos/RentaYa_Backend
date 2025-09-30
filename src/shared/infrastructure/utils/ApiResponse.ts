export class ApiResponse<T = any> {
    constructor(
        public readonly success: boolean,
        public readonly data: T,
        public readonly message: string,
        public readonly timestamp: string = new Date().toISOString()
    ) {}

    static success<T>(data: T, message: string = 'Success'): ApiResponse<T> {
        return new ApiResponse(true, data, message);
    }

    static error(message: string, data: any = null): ApiResponse {
        return new ApiResponse(false, data, message);
    }
}
