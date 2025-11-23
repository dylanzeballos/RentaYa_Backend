import { Request, Response, NextFunction } from 'express';

export function validateCreatePayment(req: Request, res: Response, next: NextFunction) {
  const { name, days} = req.body;
  if (!name || !days ) {
    return res.status(400).json({ error: 'Missing or invalid fields' });
  }
  next();
}
