import { Request, Response, NextFunction } from 'express';

export function validateCreateReport(req: Request, res: Response, next: NextFunction) {
  const { userId, propertyId, type } = req.body;
  if (!userId || !propertyId || !type) {
    return res.status(400).json({
      success: false,
      message: "userId, propertyId and type are required",
    });
  }
  next();
}
