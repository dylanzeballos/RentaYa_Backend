import { Request, Response, NextFunction } from 'express';

export function validateCreateReport(req: Request, res: Response, next: NextFunction) {
  const { startDate, finishDate, propertyId } = req.body;
  // Allow creating a report either by `userId` or by `email` (for the /email endpoint)
  if (!startDate && !finishDate && !propertyId) {
    return res.status(400).json({
      success: false,
      message: "startDate, finishDate and propertyId are required",
    });
  }
  next();
}
