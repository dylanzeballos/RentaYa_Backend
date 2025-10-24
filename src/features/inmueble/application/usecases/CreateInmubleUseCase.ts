import { InmuebleRepository } from '../../infrastructure/repositories/InmuebleRepository';
import { AppError } from '@/shared/domain/errors/AppError';

export class CreateInmuebleUseCase {
    constructor(private repo: InmuebleRepository) {}

    async execute(data: any, user?: { id?: string; userId?: string; role?: string }) {
        // Normalizar posibles formas del payload del token (user.id o user.userId)
        const resolvedUserId = user?.id ?? (user as any)?.userId ?? (user as any)?.user_id;

        if (!resolvedUserId) {
            throw new AppError('Autenticación requerida', 401);
        }

        // Validación de rol (si está presente)
        const role = (user as any)?.role;
        if (role && role !== 'propietario' ) {
            throw new AppError('Solo los usuarios con rol propietario pueden crear inmuebles', 403);
        }

        // Construir payload y delegar al repositorio
        const payload = { ...data, ownerId: resolvedUserId };
        const created = await this.repo.createInmueble(payload);
        return created;
    }
}