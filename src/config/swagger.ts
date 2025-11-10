import swaggerJsdoc from 'swagger-jsdoc';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'RentaYa API',
      version: '1.0.0',
      description: 'API documentation for RentaYa - Property rental platform',
      contact: {
        name: 'RentaYa Team',
        email: 'support@rentaya.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server',
      },
      {
        url: 'https://api.rentaya.com',
        description: 'Production server',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          description: 'Enter your JWT token',
        },
      },
      schemas: {
        Error: {
          type: 'object',
          properties: {
            success: {
              type: 'boolean',
              example: false,
            },
            message: {
              type: 'string',
              example: 'Error message',
            },
            error: {
              type: 'string',
              example: 'Detailed error information',
            },
          },
        },
        User: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              format: 'uuid',
              example: '550e8400-e29b-41d4-a716-446655440000',
            },
            email: {
              type: 'string',
              format: 'email',
              example: 'user@example.com',
            },
            fullName: {
              type: 'string',
              example: 'John Doe',
            },
            phone: {
              type: 'string',
              example: '+591 70123456',
            },
            role: {
              type: 'string',
              enum: ['user', 'owner', 'tenant'],
              example: 'user',
            },
            profilePhoto: {
              type: 'string',
              nullable: true,
              example: 'https://example.com/photo.jpg',
            },
            verificationStatus: {
              type: 'string',
              enum: ['pending', 'verified'],
              example: 'verified',
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
            },
          },
        },
        Property: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              format: 'uuid',
              example: '550e8400-e29b-41d4-a716-446655440000',
            },
            ownerId: {
              type: 'string',
              format: 'uuid',
            },
            title: {
              type: 'string',
              example: 'Beautiful apartment in downtown',
            },
            description: {
              type: 'string',
              nullable: true,
              example: 'Spacious 2-bedroom apartment with great views',
            },
            address: {
              type: 'string',
              nullable: true,
              example: 'Av. America #123',
            },
            city: {
              type: 'string',
              example: 'Cochabamba',
            },
            bedrooms: {
              type: 'integer',
              nullable: true,
              example: 2,
            },
            bathrooms: {
              type: 'integer',
              nullable: true,
              example: 1,
            },
            areaM2: {
              type: 'number',
              format: 'decimal',
              nullable: true,
              example: 85.5,
            },
            price: {
              type: 'number',
              format: 'decimal',
              example: 2500.00,
            },
            operationType: {
              type: 'string',
              enum: ['rent', 'sale', 'both'],
              example: 'rent',
            },
            status: {
              type: 'string',
              enum: ['available', 'rented'],
              example: 'available',
            },
            propertyPhotos: {
              type: 'array',
              items: {
                $ref: '#/components/schemas/PropertyPhoto',
              },
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
            },
          },
        },
        PropertyPhoto: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              example: '1',
            },
            propertyId: {
              type: 'string',
              format: 'uuid',
            },
            url: {
              type: 'string',
              example: 'https://res.cloudinary.com/demo/image/upload/sample.jpg',
            },
            order: {
              type: 'integer',
              example: 1,
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
            },
          },
        },
        UserPreference: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              format: 'uuid',
            },
            userId: {
              type: 'string',
              format: 'uuid',
            },
            propertyTypes: {
              type: 'array',
              items: {
                type: 'string',
              },
              example: ['apartment', 'house'],
            },
            modality: {
              type: 'string',
              nullable: true,
              example: 'rent',
            },
            locations: {
              type: 'array',
              items: {
                type: 'string',
              },
              example: ['Cochabamba', 'La Paz'],
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
            },
          },
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: [
    './src/features/**/routes/*.ts',
    './src/features/**/controllers/*.ts',
  ],
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
