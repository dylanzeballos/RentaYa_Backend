import { InterestRepository } from "../../infrastructure/repositories/InterestRepository";
import { ReportRepository } from "@/features/report/infrastructure/repositories/ReportRepository";
import { NotificationUseCase } from "@/features/notification/application/usecases/NotificationUseCase";
import { NotificationRepository } from "@/features/notification/infrastructure/repositories/NotificationRepository";
import { emitNotificationToUsers } from "@/socket";
import { AppError } from "@/shared/domain/errors/AppError";

export class UpdateInterestStatusUseCase {
  private interestRepository: InterestRepository;
  private reportRepository: ReportRepository;
  private notificationUseCase: NotificationUseCase;

  constructor() {
    this.interestRepository = new InterestRepository();
    this.reportRepository = new ReportRepository();
    const notificationRepository = new NotificationRepository();
    this.notificationUseCase = new NotificationUseCase(notificationRepository);
  }

  async execute(data: {
    interestId: string;
    status: "aceptado" | "rechazado";
    ownerId: string;
  }) {
    const interest = await this.interestRepository.getInterestById(
      data.interestId,
    );

    if (!interest) {
      throw new AppError("Interés no encontrado", 404);
    }

    const property = (interest as any).property;
    const user = (interest as any).user;

    if (property.ownerId !== data.ownerId) {
      throw new AppError(
        "Solo el propietario puede aceptar o rechazar solicitudes",
        403,
      );
    }

    if (interest.status === data.status) {
      throw new AppError(
        `La solicitud ya está ${data.status === "aceptado" ? "aceptado" : "rechazado"}`,
        400,
      );
    }

    const updatedInterest = await this.interestRepository.updateInterestStatus(
      data.interestId,
      data.status,
    );

    // Si se acepta el interest, crear el Report automáticamente
    if (data.status === "aceptado") {
      console.log(`[UpdateInterestStatus] Interest aceptado:`, {
        interestId: interest.id,
        startDate: interest.startDate,
        finishDate: interest.finishDate,
        hasStartDate: !!interest.startDate,
        hasFinishDate: !!interest.finishDate
      });

      if (!interest.startDate || !interest.finishDate) {
        console.error(`[UpdateInterestStatus] Error: Interest sin fechas`, {
          interestId: interest.id,
          startDate: interest.startDate,
          finishDate: interest.finishDate
        });
        throw new AppError(
          "El interés no tiene fechas definidas. No se puede crear el reporte.",
          400
        );
      }

      // Calcular el total de días
      // start: 00:00:00 del día inicial
      // finish: 23:59:59 del día final
      // Del 5 al 5 = 1 día completo
      const start = new Date(interest.startDate);
      const finish = new Date(interest.finishDate);
      
      const diffMs = finish.getTime() - start.getTime();
      let days = Math.ceil(diffMs / (1000 * 60 * 60 * 24)); // Redondear hacia arriba
      
      // Si las fechas son exactamente iguales (00:00:00), es 0 días según el cálculo
      // pero debería ser al menos 1 día
      if (days === 0) {
        days = 1;
      }
      
      const pricePerDay = Number(property.price);
      if (isNaN(pricePerDay) || pricePerDay <= 0) {
        throw new AppError("El precio de la propiedad no es válido", 400);
      }
      
      const totalPrice = pricePerDay * days;

      console.log(`[UpdateInterestStatus] Cálculo de días:`, {
        startDate: start.toISOString(),
        finishDate: finish.toISOString(),
        diffMs,
        days,
        pricePerDay,
        totalPrice,
        propertyPriceType: typeof property.price,
        propertyPrice: property.price
      });

      // Crear el Report
      const report = await this.reportRepository.createReport({
        userId: user.id,
        propertyId: property.id,
        interestId: interest.id,
        startDate: interest.startDate,
        finishDate: interest.finishDate,
        totalPrice,
        status: "Aceptado",
      });

      console.log(`[UpdateInterestStatus] Report creado exitosamente:`, {
        reportId: report.id,
        totalPrice
      });
    }

    try {
      const propertyTitle = property.title;
      const ownerName = (property.owner as any)?.fullName || "El propietario";

      if (data.status === "aceptado") {
        await this.notificationUseCase.notifyInterestAccepted(
          user.id,
          propertyTitle,
          property.id,
          interest.id,
        );

        try {
          const socketPayload = {
            type: "INTEREST_ACCEPTED",
            title: "¡Tu solicitud fue aceptada!",
            content: `${ownerName} aceptó tu solicitud en "${propertyTitle}"`,
            metadata: {
              propertyId: property.id,
              interestId: interest.id,
            },
            createdAt: new Date().toISOString(),
          };
          emitNotificationToUsers([user.id], socketPayload);
        } catch (socketError) {
          console.error("Error emitiendo notificación por socket:", socketError);
        }
      } else {
        await this.notificationUseCase.notifyInterestRejected(
          user.id,
          propertyTitle,
          property.id,
          interest.id,
        );

        try {
          const socketPayload = {
            type: "INTEREST_REJECTED",
            title: "Solicitud rechazada",
            content: `${ownerName} rechazó tu solicitud en "${propertyTitle}"`,
            metadata: {
              propertyId: property.id,
              interestId: interest.id,
            },
            createdAt: new Date().toISOString(),
          };
          emitNotificationToUsers([user.id], socketPayload);
        } catch (socketError) {
          console.error("Error emitiendo notificación por socket:", socketError);
        }
      }
    } catch (notificationError) {
      console.error("Error enviando notificación:", notificationError);
    }

    return updatedInterest;
  }
}

