import { Request, Response, NextFunction } from 'express';

export function validateCreateReview(req: Request, res: Response, next: NextFunction) {
  const { userId, propertyId, content, rating } = req.body;
  if (!userId || !propertyId || !content || typeof rating !== 'number') {
    return res.status(400).json({ error: 'Missing or invalid fields' });
  }
  if (rating < 1 || rating > 5) {
    return res.status(400).json({ error: 'Rating must be between 1 and 5' });
  }
  next();
}
