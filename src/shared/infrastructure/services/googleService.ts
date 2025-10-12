import { OAuth2Client } from "google-auth-library";
import { AppError } from "@/shared/domain/errors/AppError";

export interface GoogleUserInfo {
    id: string;
    email: string;
    name: string;
    picture?: string | undefined;
    verified_email: boolean;
}

export class GoogleOAuthService{
    private client: OAuth2Client;

    constructor (){
        const clientId = process.env.GOOGLE_CLIENT_ID;
        if(!clientId){
            throw new AppError("GOOGLE_CLIENT_ID no esta definido", 500);
        }
        this.client = new OAuth2Client(clientId);
    }

    async verifyToken(token: string): Promise<GoogleUserInfo> {
        try {
            const clientId = process.env.GOOGLE_CLIENT_ID;
            if(!clientId){
                throw new AppError("Configuración de Google no válida", 500);
            }
            const ticket = await this.client.verifyIdToken({
                idToken: token,
                audience: clientId,
            });
            const payload = ticket.getPayload();

            if (!payload) {
                throw new AppError("Token de Google no válido", 401);
            }

            return {
                id: payload.sub,
                email: payload.email!,
                name: payload.name!,
                picture: payload.picture,
                verified_email: payload.email_verified || false,
            };
        } catch (error) {
            throw new AppError("Invalid Google token", 401);
        }
    }
}