export interface TokenPayload {
    userId: string;
    email: string;
    role: string;
}

export interface LoginRequest {
    email: string;
    password: string;
}

export type UserRole = "rentante" | "arrendador";

export interface RegisterRequest {
    email: string;
    password: string;
    role: UserRole;
    fullName?: string;
    phone?: string;
}

export interface AuthResponse {
    user: {
        id: string;
        email: string;
        fullName?: string | null;
        phone?: string | null;
        role: string;
        verificationStatus: string;
    };
    accessToken: string;
    refreshToken: string;
}

export interface RefreshTokenRequest {
    refreshToken: string;
}

export interface TokenResponse {
    accessToken: string;
    refreshToken: string;
}

export interface GoogleLoginData {
    token: string;
    role: UserRole;
}

export interface GoogleUserData{
    googleId: string;
    email: string;
    fullName: string;
    profilePhoto?: string | null;
}

export type LoginResponse = AuthResponse;