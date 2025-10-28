import { InmuebleRepository } from "@/features/inmueble/infrastructure/repositories/InmuebleRepository";

export class ListInmueblesUseCase {
  constructor(private readonly repo: InmuebleRepository) {}

  async execute() {
    const items = await this.repo.listAllInmuebles();
    // formatear datos si es necesario
    const safe = (items || []).map((item: any) => {
      const copy: any = { ...item };
      if (copy.price && typeof copy.price.toString === "function")
        copy.price = copy.price.toString();
      if (copy.areaM2 && typeof copy.areaM2.toString === "function")
        copy.areaM2 = copy.areaM2.toString();
      if (copy.createdAt instanceof Date)
        copy.createdAt = copy.createdAt.toISOString();
      if (copy.updatedAt instanceof Date)
        copy.updatedAt = copy.updatedAt.toISOString();
      return copy;
    });

    return { items: safe, total: safe.length };
  }
}
