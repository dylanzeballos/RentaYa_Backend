export interface TokenPayload {
    userId: string;
    email: string;
    role: string;
}

export interface LoginRequest {
    correoElectronico: string;
    contrasena: string;
}

export interface RegisterRequest {
    correoElectronico: string;
    contrasena: string;
    nombreCompleto?: string;
    telefono?: string;
}

export interface AuthResponse {
    user: {
        id: string;
        correoElectronico: string;
        nombreCompleto?: string | null;
        telefono?: string | null;
        rol: string;
        estadoVerificacion: string;
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
}

export interface GoogleUserData{
    googleId: string;
    correoElectronico: string;
    nombreCompleto: string;
    fotoPerfil?: string | null;
}

export type LoginResponse = AuthResponse;