import { InterestRepository } from "../../infrastructure/repositories/InterestRepository";
import { PropertyRepository } from "../../infrastructure/repositories/PropertyRepository";
import { NotificationUseCase } from "@/features/notification/application/usecases/NotificationUseCase";
import { NotificationRepository } from "@/features/notification/infrastructure/repositories/NotificationRepository";
import { emitNotificationToUsers } from "@/socket";
import { AppError } from "@/shared/domain/errors/AppError";

export class CreateInterestUseCase {
  private interestRepository: InterestRepository;
  private propertyRepository: PropertyRepository;
  private notificationUseCase: NotificationUseCase;

  constructor() {
    this.interestRepository = new InterestRepository();
    this.propertyRepository = new PropertyRepository();
    const notificationRepository = new NotificationRepository();
    this.notificationUseCase = new NotificationUseCase(notificationRepository);
  }

  async execute(data: {
    userId: string;
    propertyId: string;
    message?: string;
    startDate: Date;
    finishDate: Date;
  }) {
    const property = await this.propertyRepository.getPropertyById(
      data.propertyId,
    );
    if (!property) {
      throw new AppError("Propiedad no encontrada", 404);
    }

    if (property.ownerId === data.userId) {
      throw new AppError(
        "No puedes mostrar interés en tu propia propiedad",
        400,
      );
    }

    // Validar que las fechas no se traslapen con otros interests/reports activos
    const hasConflict = await this.interestRepository.hasDateConflict(
      data.propertyId,
      data.startDate,
      data.finishDate
    );

    if (hasConflict) {
      throw new AppError(
        "Las fechas seleccionadas no están disponibles. Ya existe una solicitud o renta activa en este periodo.",
        409
      );
    }

    const interestData: any = {
      userId: data.userId,
      propertyId: data.propertyId,
      startDate: data.startDate,
      finishDate: data.finishDate,
    };
    if (data.message) {
      interestData.message = data.message;
    }
    const interest = await this.interestRepository.createInterest(interestData);

    try {
      const userName = (interest as any).user?.fullName || "Un usuario";
      const propertyTitle = (interest as any).property?.title;

      await this.notificationUseCase.notifyNewInterest(
        property.ownerId,
        propertyTitle,
        userName,
        property.id,
        interest.id,
      );

      try {
        const socketPayload = {
          type: "NEW_INTEREST",
          title: "¡Nueva solicitud de tu propiedad!",
          content: `${userName} está interesado en "${propertyTitle}"`,
          metadata: {
            propertyId: property.id,
            interestId: interest.id,
          },
          createdAt: new Date().toISOString(),
        };
        emitNotificationToUsers([property.ownerId], socketPayload);
      } catch (socketError) {
        console.error("Error emitiendo notificación por socket:", socketError);
      }
    } catch (notificationError) {
      console.error("Error enviando notificación:", notificationError);
    }

    return interest;
  }
}

