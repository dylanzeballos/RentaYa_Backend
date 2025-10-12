"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiResponse = void 0;
class ApiResponse {
    success;
    data;
    message;
    timestamp;
    constructor(success, data, message, timestamp = new Date().toISOString()) {
        this.success = success;
        this.data = data;
        this.message = message;
        this.timestamp = timestamp;
    }
    static success(data, message = 'Success') {
        return new ApiResponse(true, data, message);
    }
    static error(message, data = null) {
        return new ApiResponse(false, data, message);
    }
}
exports.ApiResponse = ApiResponse;
//# sourceMappingURL=ApiResponse.js.map