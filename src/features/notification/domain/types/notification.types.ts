export enum NotificationType {
  NEW_INTEREST = "NEW_INTEREST",
  INTEREST_ACCEPTED = "INTEREST_ACCEPTED",
  INTEREST_REJECTED = "INTEREST_REJECTED",

  NEW_MESSAGE = "NEW_MESSAGE",

  PROPERTY_APPROVED = "PROPERTY_APPROVED",
  PROPERTY_REJECTED = "PROPERTY_REJECTED",
  PROPERTY_RENTED = "PROPERTY_RENTED",
  PROPERTY_AVAILABLE = "PROPERTY_AVAILABLE",

  NEW_REVIEW = "NEW_REVIEW",

  RECOMMENDATION = "RECOMMENDATION",
  PRICE_DROP = "PRICE_DROP",
  NEW_PROPERTY_AREA = "NEW_PROPERTY_AREA",

  SYSTEM = "SYSTEM",
  WELCOME = "WELCOME",
  ACCOUNT_VERIFIED = "ACCOUNT_VERIFIED",
}

export interface CreateNotificationDTO {
  userId: string;
  type: NotificationType;
  title: string;
  content: string;
  metadata?: Record<string, any>;
  sendPush?: boolean;
}

export interface NotificationFilters {
  userId: string;
  read?: boolean;
  type?: NotificationType;
  deleted?: boolean;
}

export interface DeviceTokenDTO {
  userId: string;
  token: string;
  platform: "android" | "ios" | "web";
}

export interface PushNotificationPayload {
  title: string;
  body: string;
  data?: Record<string, any>;
  sound?: "default" | null;
  badge?: number;
  priority?: "default" | "normal" | "high";
}
