import { InterestRepository } from "../../infrastructure/repositories/InterestRepository";
import { NotificationUseCase } from "@/features/notification/application/usecases/NotificationUseCase";
import { NotificationRepository } from "@/features/notification/infrastructure/repositories/NotificationRepository";
import { emitNotificationToUsers } from "@/socket";
import { AppError } from "@/shared/domain/errors/AppError";

export class UpdateInterestStatusUseCase {
  private interestRepository: InterestRepository;
  private notificationUseCase: NotificationUseCase;

  constructor() {
    this.interestRepository = new InterestRepository();
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

