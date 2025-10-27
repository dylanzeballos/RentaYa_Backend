import { InmuebleRepository } from "../../infrastructure/repositories/InmuebleRepository";
import { AppError } from "@/shared/domain/errors/AppError";

export class GetInmuebleDetailUseCase {
    constructor(private repo: InmuebleRepository) {}
    async execute(inmuebleId: string) {
        const inmueble = await this.repo.detailInmueble(inmuebleId);
        if (!inmueble) {
            throw new AppError('Inmueble no encontrado', 404);
        }   
        return inmueble;
    }
}