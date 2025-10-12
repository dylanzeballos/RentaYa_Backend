import { Request, Response, NextFunction } from "express";
import { z } from 'zod';
export declare const validateSchema: (schema: z.ZodSchema) => (req: Request, res: Response, next: NextFunction) => void;
//# sourceMappingURL=validateSchema.d.ts.map