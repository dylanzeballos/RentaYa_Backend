import prisma from "@/config/prisma";
import { Interest } from "@prisma/client";
import { AppError } from "@/shared/domain/errors/AppError";

export interface CreateInterestDTO {
  userId: string;
  propertyId: string;
  message?: string;
}

export interface UpdateInterestStatusDTO {
  status: "pendiente" | "aceptado" | "rechazado";
}

export class InterestRepository {
  async createInterest(data: CreateInterestDTO): Promise<Interest> {
    const existingInterest = await prisma.interest.findFirst({
      where: {
        userId: data.userId,
        propertyId: data.propertyId,
      },
    });

    if (existingInterest) {
      throw new AppError("Ya has mostrado interés en esta propiedad", 409);
    }

    return await prisma.interest.create({
      data: {
        userId: data.userId,
        propertyId: data.propertyId,
        message: data.message || null,
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
      },
      orderBy: { createdAt: "desc" },
    });
  }
}

