import swaggerJsdoc from "swagger-jsdoc";

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "RentaYa API",
      version: "1.0.0",
      description: "API documentation for RentaYa - Property rental platform",
      contact: {
        name: "RentaYa Team",
        email: "support@rentaya.com",
      },
    },
    servers: [
      {
        url: process.env.NODE_ENV === 'production'
          ? "https://rentaya-backend.onrender.com"
          : `http://localhost:${process.env.PORT || 3000}`,
        description: process.env.NODE_ENV === 'production' ? "Production server" : "Development server",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
          description: "Enter your JWT token",
        },
      },
      schemas: {
        Error: {
          type: "object",
          properties: {
            success: {
              type: "boolean",
              example: false,
            },
            message: {
              type: "string",
              example: "Error message",
            },
            error: {
              type: "string",
              example: "Detailed error information",
            },
          },
        },
        User: {
          type: "object",
          properties: {
            id: {
              type: "string",
              format: "uuid",
              example: "550e8400-e29b-41d4-a716-446655440000",
            },
            email: {
              type: "string",
              format: "email",
              example: "user@example.com",
            },
            fullName: {
              type: "string",
              example: "John Doe",
            },
            phone: {
              type: "string",
              example: "+591 70123456",
            },
            role: {
              type: "string",
              enum: ["user", "owner", "tenant"],
              example: "user",
            },
            profilePhoto: {
              type: "string",
              nullable: true,
              example: "https://example.com/photo.jpg",
            },
            verificationStatus: {
              type: "string",
              enum: ["pending", "verified"],
              example: "verified",
            },
            createdAt: {
              type: "string",
              format: "date-time",
            },
            updatedAt: {
              type: "string",
              format: "date-time",
            },
          },
        },
        Property: {
          type: "object",
          properties: {
            id: {
              type: "string",
              format: "uuid",
              example: "550e8400-e29b-41d4-a716-446655440000",
            },
            ownerId: {
              type: "string",
              format: "uuid",
            },
            title: {
              type: "string",
              example: "Beautiful apartment in downtown",
            },
            description: {
              type: "string",
              nullable: true,
              example: "Spacious 2-bedroom apartment with great views",
            },
            address: {
              type: "string",
              nullable: true,
              example: "Av. America #123",
            },
            city: {
              type: "string",
              example: "Cochabamba",
            },
            bedrooms: {
              type: "integer",
              nullable: true,
              example: 2,
            },
            bathrooms: {
              type: "integer",
              nullable: true,
              example: 1,
            },
            areaM2: {
              type: "number",
              format: "decimal",
              nullable: true,
              example: 85.5,
            },
            price: {
              type: "number",
              format: "decimal",
              example: 2500.0,
            },
            operationType: {
              type: "string",
              enum: ["rent", "sale", "both"],
              example: "rent",
            },
            status: {
              type: "string",
              enum: ["available", "rented"],
              example: "available",
            },
            propertyPhotos: {
              type: "array",
              items: {
                $ref: "#/components/schemas/PropertyPhoto",
              },
            },
            createdAt: {
              type: "string",
              format: "date-time",
            },
            updatedAt: {
              type: "string",
              format: "date-time",
            },
          },
        },
        PropertyPhoto: {
          type: "object",
          properties: {
            id: {
              type: "string",
              example: "1",
            },
            propertyId: {
              type: "string",
              format: "uuid",
            },
            url: {
              type: "string",
              example:
                "https://res.cloudinary.com/demo/image/upload/sample.jpg",
            },
            order: {
              type: "integer",
              example: 1,
            },
            createdAt: {
              type: "string",
              format: "date-time",
            },
          },
        },
        UserPreference: {
          type: "object",
          properties: {
            id: {
              type: "string",
              format: "uuid",
            },
            userId: {
              type: "string",
              format: "uuid",
            },
            propertyTypes: {
              type: "array",
              items: {
                type: "string",
              },
              example: ["apartment", "house"],
            },
            modality: {
              type: "string",
              nullable: true,
              example: "rent",
            },
            locations: {
              type: "array",
              items: {
                type: "string",
              },
              example: ["Cochabamba", "La Paz"],
            },
            createdAt: {
              type: "string",
              format: "date-time",
            },
            updatedAt: {
              type: "string",
              format: "date-time",
            },
          },
        },
        Notification: {
          type: "object",
          properties: {
            id: {
              type: "string",
              format: "uuid",
              example: "550e8400-e29b-41d4-a716-446655440000",
            },
            userId: {
              type: "string",
              format: "uuid",
              example: "123e4567-e89b-12d3-a456-426614174000",
            },
            type: {
              type: "string",
              enum: [
                "NEW_INTEREST",
                "INTEREST_ACCEPTED",
                "INTEREST_REJECTED",
                "NEW_MESSAGE",
                "PROPERTY_APPROVED",
                "PROPERTY_REJECTED",
                "PROPERTY_RENTED",
                "PROPERTY_AVAILABLE",
                "NEW_REVIEW",
                "RECOMMENDATION",
                "PRICE_DROP",
                "NEW_PROPERTY_AREA",
                "SYSTEM",
                "WELCOME",
                "ACCOUNT_VERIFIED",
              ],
              example: "NEW_INTEREST",
              description: "Tipo de notificación",
            },
            title: {
              type: "string",
              example: "¡Nueva solicitud de tu propiedad!",
              description: "Título de la notificación",
            },
            content: {
              type: "string",
              example: 'Juan Pérez está interesado en "Casa en Cochabamba"',
              description: "Contenido de la notificación",
            },
            read: {
              type: "boolean",
              example: false,
              description: "Indica si la notificación fue leída",
            },
            deleted: {
              type: "boolean",
              example: false,
              description:
                "Indica si la notificación fue eliminada (soft delete)",
            },
            metadata: {
              type: "object",
              nullable: true,
              example: {
                propertyId: "abc-123",
                interestId: "def-456",
              },
              description:
                "Información adicional relacionada con la notificación",
            },
            pushSent: {
              type: "boolean",
              example: true,
              description: "Indica si se envió una notificación push",
            },
            createdAt: {
              type: "string",
              format: "date-time",
              example: "2024-01-15T10:30:00.000Z",
            },
          },
        },
        DeviceToken: {
          type: "object",
          properties: {
            id: {
              type: "string",
              format: "uuid",
              example: "550e8400-e29b-41d4-a716-446655440000",
            },
            userId: {
              type: "string",
              format: "uuid",
              example: "123e4567-e89b-12d3-a456-426614174000",
            },
            token: {
              type: "string",
              example: "ExponentPushToken[xxxxxxxxxxxxxxxxxxxxxx]",
              description: "Token de Expo Push Notifications",
            },
            platform: {
              type: "string",
              enum: ["android", "ios", "web"],
              example: "android",
              description: "Plataforma del dispositivo",
            },
            active: {
              type: "boolean",
              example: true,
              description: "Indica si el token está activo",
            },
            createdAt: {
              type: "string",
              format: "date-time",
            },
            updatedAt: {
              type: "string",
              format: "date-time",
            },
          },
        },
        Review: {
          type: "object",
          properties: {
            id: {
              type: "string",
              format: "uuid",
              example: "550e8400-e29b-41d4-a716-446655440000",
            },
            userId: {
              type: "string",
              format: "uuid",
              example: "123e4567-e89b-12d3-a456-426614174000",
              description: "ID del usuario que crea la reseña",
            },
            propertyId: {
              type: "string",
              format: "uuid",
              example: "789e0123-e89b-12d3-a456-426614174000",
              description: "ID de la propiedad reseñada",
            },
            content: {
              type: "string",
              nullable: true,
              example:
                "Excelente propiedad, muy bien ubicada y en buenas condiciones.",
              description: "Contenido de la reseña",
            },
            rating: {
              type: "integer",
              minimum: 1,
              maximum: 5,
              example: 5,
              description: "Calificación de 1 a 5 estrellas",
            },
            createdAt: {
              type: "string",
              format: "date-time",
              example: "2024-01-15T10:30:00.000Z",
            },
            updatedAt: {
              type: "string",
              format: "date-time",
              example: "2024-01-15T10:30:00.000Z",
            },
          },
        },
        CreateReviewRequest: {
          type: "object",
          required: ["userId", "propertyId", "rating"],
          properties: {
            userId: {
              type: "string",
              format: "uuid",
              example: "123e4567-e89b-12d3-a456-426614174000",
              description: "ID del usuario que crea la reseña",
            },
            propertyId: {
              type: "string",
              format: "uuid",
              example: "789e0123-e89b-12d3-a456-426614174000",
              description: "ID de la propiedad a reseñar",
            },
            content: {
              type: "string",
              example:
                "Excelente propiedad, muy bien ubicada y en buenas condiciones.",
              description: "Contenido opcional de la reseña",
            },
            rating: {
              type: "integer",
              minimum: 1,
              maximum: 5,
              example: 5,
              description: "Calificación de 1 a 5 estrellas (requerido)",
            },
          },
        },
        RegisterDeviceToken: {
          type: "object",
          required: ["token", "platform"],
          properties: {
            token: {
              type: "string",
              example: "ExponentPushToken[xxxxxxxxxxxxxxxxxxxxxx]",
              description: "Token de Expo Push Notifications",
            },
            platform: {
              type: "string",
              enum: ["android", "ios", "web"],
              example: "android",
              description: "Plataforma del dispositivo",
            },
          },
        },
        RemoveDeviceToken: {
          type: "object",
          required: ["token"],
          properties: {
            token: {
              type: "string",
              example: "ExponentPushToken[xxxxxxxxxxxxxxxxxxxxxx]",
              description: "Token de Expo Push Notifications a remover",
            },
          },
        },
      },
      tags: [
        {
          name: "Auth",
          description: "Endpoints de autenticación y registro",
        },
        {
          name: "Users",
          description: "Gestión de usuarios",
        },
        {
          name: "Properties",
          description: "Gestión de propiedades",
        },
        {
          name: "Reviews",
          description: "Gestión de reseñas",
        },
        {
          name: "Notifications",
          description: "Sistema de notificaciones push y en app",
        },
      ],
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./src/features/**/routes/*.ts", "./src/features/**/controllers/*.ts"],
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
