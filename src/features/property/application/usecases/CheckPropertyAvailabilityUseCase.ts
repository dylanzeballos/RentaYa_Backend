import prisma from "@/config/prisma";

export interface AvailabilityCheckResult {
  isAvailable: boolean;
  currentOccupancy?: {
    startDate: Date;
    endDate: Date;
    userId: string;
    userName: string;
  } | undefined;
  nextAvailableDate?: Date | undefined;
}

export class CheckPropertyAvailabilityUseCase {
  async execute(
    propertyId: string,
    requestedStartDate?: Date,
    requestedEndDate?: Date
  ): Promise<AvailabilityCheckResult> {
    const now = new Date();

    // Obtener todos los interests activos (pendiente o aceptado) para esta propiedad
    const activeInterests = await prisma.interest.findMany({
      where: {
        propertyId,
        status: {
          in: ["pendiente", "aceptado"],
        },
        finishDate: {
          gte: now, // Solo los que terminan hoy o después
        },
      },
      include: {
        user: {
          select: {
            id: true,
            fullName: true,
          },
        },
      },
      orderBy: {
        startDate: "asc",
      },
    });

    // Obtener todos los reports activos (Aceptado, En curso) para esta propiedad
    const activeReports = await prisma.report.findMany({
      where: {
        propertyId,
        status: {
          in: ["Aceptado", "En curso"],
        },
        finishDate: {
          gte: now, // Solo los que terminan hoy o después
        },
      },
      include: {
        user: {
          select: {
            id: true,
            fullName: true,
          },
        },
      },
      orderBy: {
        startDate: "asc",
      },
    });

    // Si no hay fechas específicas, revisar si hay algún report activo ahora
    if (!requestedStartDate || !requestedEndDate) {
      const currentOccupancy = activeReports.find((report) => {
        return (
          report.startDate &&
          report.finishDate &&
          report.startDate <= now &&
          report.finishDate >= now
        );
      });

      if (currentOccupancy) {
        return {
          isAvailable: false,
          currentOccupancy: {
            startDate: currentOccupancy.startDate!,
            endDate: currentOccupancy.finishDate!,
            userId: currentOccupancy.user.id,
            userName: currentOccupancy.user.fullName || "Usuario",
          },
          nextAvailableDate: currentOccupancy.finishDate
            ? new Date(currentOccupancy.finishDate.getTime() + 24 * 60 * 60 * 1000)
            : undefined,
        };
      }

      return { isAvailable: true };
    }

    // Si se proporcionan fechas, verificar si hay conflictos en interests o reports
    const allActiveReservations = [...activeInterests, ...activeReports];
    
    const hasConflict = allActiveReservations.some((reservation) => {
      if (!reservation.startDate || !reservation.finishDate) return false;

      // Verificar si hay solapamiento
      // El rango solicitado se solapa si:
      // - Empieza antes de que termine la reservación Y
      // - Termina después de que empiece la reservación
      return (
        requestedStartDate < reservation.finishDate &&
        requestedEndDate > reservation.startDate
      );
    });

    if (hasConflict) {
      // Encontrar el próximo slot disponible - buscar en reports porque tienen información del usuario
      const conflictingReport = activeReports.find(
        (report) =>
          report.startDate &&
          report.finishDate &&
          requestedStartDate < report.finishDate &&
          requestedEndDate > report.startDate
      );

      return {
        isAvailable: false,
        currentOccupancy: conflictingReport
          ? {
              startDate: conflictingReport.startDate!,
              endDate: conflictingReport.finishDate!,
              userId: conflictingReport.user.id,
              userName: conflictingReport.user.fullName || "Usuario",
            }
          : undefined,
        nextAvailableDate: conflictingReport?.finishDate
          ? new Date(conflictingReport.finishDate.getTime() + 24 * 60 * 60 * 1000)
          : undefined,
      };
    }

    return { isAvailable: true };
  }
}
