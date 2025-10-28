import { Request, Response, RequestHandler } from "express";
import { asyncHandler } from "@/shared/infrastructure/utils/asyncHandler";
import { ApiResponse } from "@/shared/infrastructure/utils/ApiResponse";
import { CreateInmuebleUseCase } from "@/features/inmueble/application/usecases/CreateInmubleUseCase";
import prisma from "@/config/prisma";
function jsonReplacer(key: string, value: any) {
  return typeof value === "bigint" ? value.toString() : value;
}

export class InmuebleController {
  constructor(private readonly createUseCase: CreateInmuebleUseCase) {}

  crearInmueble: RequestHandler = asyncHandler(
    async (req: Request, res: Response) => {
      const user = (req as any).user; // usuario autenticado (token)
      const payload = req.body; // datos enviados desde el frontend o Postman
      const result = await this.createUseCase.execute(payload, user);

      // Convertimos BigInt a string antes de responder
      const jsonSafeResult = JSON.parse(JSON.stringify(result, jsonReplacer));
      res
        .status(201)
        .json(
          ApiResponse.success(jsonSafeResult, "Inmueble creado exitosamente")
        );
    }
  );

  listarInmuebles: RequestHandler = asyncHandler(
    async (req: Request, res: Response) => {
      const items = await prisma.inmueble.findMany({
        include: { propertyPhotos: true },
        orderBy: { createdAt: "desc" },
      });

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

      const payload = { items: safe, total: safe.length };
      // Convertir BigInt a string antes de que Express haga JSON.stringify
      const safePayload = JSON.parse(JSON.stringify(payload, jsonReplacer));
      res
        .status(200)
        .json(ApiResponse.success(safePayload, "Listado inmuebles"));
    }
  );

  listarMisInmuebles: RequestHandler = asyncHandler(
    async (req: Request, res: Response) => {
      const user = (req as any).user; // usuario autenticado

      if (!user || !user.userId) {
        return res
          .status(401)
          .json(ApiResponse.error("Usuario no autenticado"));
      }

      const items = await prisma.inmueble.findMany({
        where: { ownerId: user.userId },
        include: { propertyPhotos: true },
        orderBy: { createdAt: "desc" },
      });

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

      const payload = { items: safe, total: safe.length };
      const safePayload = JSON.parse(JSON.stringify(payload, jsonReplacer));
      res
        .status(200)
        .json(ApiResponse.success(safePayload, "Mis propiedades listadas"));
    }
  );
}
