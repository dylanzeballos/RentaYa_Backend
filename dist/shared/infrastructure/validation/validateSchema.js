"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSchema = void 0;
const zod_1 = require("zod");
const AppError_1 = require("@/shared/domain/errors/AppError");
const validateSchema = (schema) => {
    return (req, res, next) => {
        try {
            schema.parse({
                body: req.body,
                params: req.params,
                query: req.query,
            });
            next();
        }
        catch (error) {
            if (error instanceof zod_1.z.ZodError) {
                const messages = error.issues.map(err => ` ${err.path.join(', ')}: ${err.message}`);
                throw new AppError_1.AppError(`Invalid request data: ${messages.join('; ')}`, 400);
            }
            next(error);
        }
    };
};
exports.validateSchema = validateSchema;
//# sourceMappingURL=validateSchema.js.map