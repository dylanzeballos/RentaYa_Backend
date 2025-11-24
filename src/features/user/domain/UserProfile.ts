export interface UserProfile {
  id: string;
  email: string;
  fullName: string | null;
  phone?: string | null;
  role: string;
  profilePhoto?: string | null;
  verificationStatus: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UpdateUserProfileData {
  fullName?: string;
  phone?: string;
}

export interface UserProfileResponse {
  id: string;
  email: string;
  fullName: string | null;
  phone?: string | null;
  role: string;
  profilePhoto?: string | null;
  verificationStatus: string;
  createdAt: Date;
  updatedAt: Date;
}
