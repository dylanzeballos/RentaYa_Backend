import { Request, Response, NextFunction } from 'express';

export function validateCreateReport(req: Request, res: Response, next: NextFunction) {
  const { userId, email, propertyId } = req.body;
  // Allow creating a report either by `userId` or by `email` (for the /email endpoint)
  if ((!userId && !email) || !propertyId) {
    return res.status(400).json({
      success: false,
      message: "userId (or email) and propertyId are required",
    });
  }
  next();
}
