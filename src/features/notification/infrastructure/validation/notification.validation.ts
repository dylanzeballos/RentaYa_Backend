import { Request, Response, NextFunction } from 'express';

export function validateRegisterDeviceToken(req: Request, res: Response, next: NextFunction) {
  const { token, platform } = req.body;

  if (!token || typeof token !== 'string') {
    return res.status(400).json({
      success: false,
      message: "Token is required and must be a string",
    });
  }

  if (!platform || typeof platform !== 'string') {
    return res.status(400).json({
      success: false,
      message: "Platform is required and must be a string",
    });
  }

  if (!['android', 'ios', 'web'].includes(platform)) {
    return res.status(400).json({
      success: false,
      message: "Platform must be 'android', 'ios', or 'web'",
    });
  }

  next();
}

export function validateRemoveDeviceToken(req: Request, res: Response, next: NextFunction) {
  const { token } = req.body;

  if (!token || typeof token !== 'string') {
    return res.status(400).json({
      success: false,
      message: "Token is required and must be a string",
    });
  }

  next();
}

export function validateNotificationId(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      success: false,
      message: "Notification ID is required",
    });
  }

  next();
}
