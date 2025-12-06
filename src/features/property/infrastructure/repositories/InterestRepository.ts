import prisma from "@/config/prisma";
import { Interest } from "@prisma/client";
import { AppError } from "@/shared/domain/errors/AppError";

export interface CreateInterestDTO {
  userId: string;
  propertyId: string;
  message?: string;
  startDate: Date;
  finishDate: Date;
}

export interface UpdateInterestStatusDTO {
  status: "pendiente" | "aceptado" | "rechazado";
}

export class InterestRepository {
  async createInterest(data: CreateInterestDTO): Promise<Interest> {
    // Permitir múltiples interests por usuario/propiedad
    // Solo se bloquea si hay uno activo (pendiente o aceptado)
    const activeInterest = await prisma.interest.findFirst({
      where: {
        userId: data.userId,
        propertyId: data.propertyId,
        status: {
          in: ["pendiente", "aceptado"],
        },
      },
    });

    if (activeInterest) {
      throw new AppError("Ya tienes una solicitud activa para esta propiedad", 409);
    }

    return await prisma.interest.create({
      data: {
        userId: data.userId,
        propertyId: data.propertyId,
        message: data.message || null,
        startDate: data.startDate,
        finishDate: data.finishDate,
        status: "pendiente",
      },
      include: {
        user: {
          select: {
            id: true,
            fullName: true,
            email: true,
            phone: true,
          },
        },
        property: {
          select: {
            id: true,
            title: true,
            ownerId: true,
            owner: {
              select: {
                id: true,
                fullName: true,
                email: true,
              },
            },
          },
        },
      },
    });
  }

  async getInterestById(interestId: string): Promise<Interest | null> {
    return await prisma.interest.findUnique({
      where: { id: interestId },
      include: {
        user: {
          select: {
            id: true,
            fullName: true,
            email: true,
            phone: true,
          },
        },
        property: {
          select: {
            id: true,
            title: true,
            price: true, // ¡AGREGADO! Necesario para calcular totalPrice del Report
            ownerId: true,
            owner: {
              select: {
                id: true,
                fullName: true,
                email: true,
              },
            },
          },
        },
      },
    });
  }

  async updateInterestStatus(
    interestId: string,
    status: "pendiente" | "aceptado" | "rechazado",
  ): Promise<Interest> {
    return await prisma.interest.update({
      where: { id: interestId },
      data: { status },
      include: {
        user: {
          select: {
            id: true,
            fullName: true,
            email: true,
            phone: true,
          },
        },
        property: {
          select: {
            id: true,
            title: true,
            ownerId: true,
          },
        },
      },
    });
  }

  async getUserInterests(userId: string): Promise<Interest[]> {
    return await prisma.interest.findMany({
      where: { userId },
      include: {
        property: {
          include: {
            propertyPhotos: {
              take: 1,
              orderBy: { order: "asc" },
            },
            owner: {
              select: {
                id: true,
                fullName: true,
                email: true,
                phone: true,
                profilePhoto: true,
              },
            },
          },
        },
        report: {
          select: {
            id: true,
            startDate: true,
            finishDate: true,
            status: true,
            totalPrice: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });
  }

  async getPropertyInterests(propertyId: string): Promise<Interest[]> {
    return await prisma.interest.findMany({
      where: { propertyId },
      include: {
        user: {
          select: {
            id: true,
            fullName: true,
            email: true,
            phone: true,
            profilePhoto: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });
  }

  async getPropertyOwnerInterests(ownerId: string): Promise<Interest[]> {
    return await prisma.interest.findMany({
      where: {
        property: {
          ownerId: ownerId,
        },
      },
      include: {
        user: {
          select: {
            id: true,
            fullName: true,
            email: true,
            phone: true,
            profilePhoto: true,
          },
        },
        property: {
          select: {
            id: true,
            title: true,
            address: true,
            city: true,
            price: true,
            propertyPhotos: {
              take: 1,
              orderBy: { order: "asc" },
            },
          },
        },
        report: {
          select: {
            id: true,
            startDate: true,
            finishDate: true,
            status: true,
            totalPrice: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });
  }

  async hasDateConflict(
    propertyId: string,
    startDate: Date,
    finishDate: Date
  ): Promise<boolean> {
    // Normalizar fechas a medianoche UTC para comparación correcta
    const normalizeDate = (date: Date): Date => {
      const normalized = new Date(date);
      normalized.setUTCHours(0, 0, 0, 0);
      return normalized;
    };

    const normalizedStart = normalizeDate(startDate);
    const normalizedFinish = normalizeDate(finishDate);

    console.log('[hasDateConflict] Verificando conflictos para propiedad:', propertyId);
    console.log('[hasDateConflict] Rango solicitado:', {
      start: normalizedStart.toISOString(),
      finish: normalizedFinish.toISOString()
    });

    // Verificar si hay interests activos (pendiente o aceptado) con fechas traslapadas
    // Usamos DATE() para comparar solo la fecha, ignorando la hora
    const conflictingInterests = await prisma.$queryRaw<Array<{ id: string }>>`
      SELECT id FROM "interests"
      WHERE "propertyId" = ${propertyId}::uuid
        AND status IN ('pendiente', 'aceptado')
        AND DATE("startDate") <= DATE(${normalizedFinish}::timestamp)
        AND DATE("finishDate") >= DATE(${normalizedStart}::timestamp)
    `;

    if (conflictingInterests.length > 0) {
      console.log('[hasDateConflict] Conflicto encontrado con Interest:', conflictingInterests[0]?.id);
      return true;
    }

    // Verificar si hay reports activos (Aceptado, En curso) con fechas traslapadas
    const conflictingReports = await prisma.$queryRaw<Array<{ id: string }>>`
      SELECT id FROM "reports"
      WHERE "propertyId" = ${propertyId}::uuid
        AND status IN ('Aceptado', 'En curso')
        AND DATE("startDate") <= DATE(${normalizedFinish}::timestamp)
        AND DATE("finishDate") >= DATE(${normalizedStart}::timestamp)
    `;

    if (conflictingReports.length > 0) {
      console.log('[hasDateConflict] Conflicto encontrado con Report:', conflictingReports[0]?.id);
      return true;
    }

    console.log('[hasDateConflict] No se encontraron conflictos');
    return false;
  }
}

