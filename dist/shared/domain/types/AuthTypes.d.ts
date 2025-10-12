export interface TokenPayload {
    userId: string;
    email: string;
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
//# sourceMappingURL=AuthTypes.d.ts.map