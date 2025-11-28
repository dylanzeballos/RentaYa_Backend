import express, { Express } from "express";
import cors from "cors";
import helmet from "helmet";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "@/config/swagger";

import { errorHandler } from "@/shared/infrastructure/middleware/errorHandler";
import { CronService } from "@/shared/infrastructure/services/CronService";

//Rutas de features
import authRoutes from '@/features/auth/infrastructure/routes/auth.routes';
import propertyRoutes from '@/features/property/infrastructure/routes/property.routes';
import reviewRoutes from '@/features/property/infrastructure/routes/review.routes';
import paymentRoutes from '@/features/property/infrastructure/routes/payment.routes';
import interestRoutes from '@/features/property/infrastructure/routes/interest.routes';
import usersRoutes from '@/features/user/infrastructure/routes/user.routes';
import reportRoutes from '@/features/report/infrastructure/routes/report.route';
import notificationRoutes from '@/features/notification/infrastructure/routes/notification.routes';

const app: Express = express();

app.use(helmet({
    crossOriginEmbedderPolicy: false,
    crossOriginResourcePolicy: { policy: "cross-origin" }
}));
const corsOptions = process.env.NODE_ENV === 'production'
    ? {
        // Producción: Permitir cualquier origen para APKs
        origin: true,
        credentials: true,
        optionsSuccessStatus: 200,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS', 'HEAD'],
        allowedHeaders: [
            'Content-Type',
            'Authorization',
            'Accept',
            'X-Requested-With',
            'Origin',
            'Access-Control-Allow-Origin',
            'Access-Control-Request-Method',
            'Access-Control-Request-Headers'
        ],
        exposedHeaders: ['Content-Length', 'X-Foo', 'X-Bar']
    }
    : {
        // Desarrollo: Configuración específica para Expo
        origin: [
            process.env.FRONTEND_URL || "http://localhost:8081",
            "http://localhost:8081",
            "http://192.168.0.11:8081",
            "exp://localhost:8081",
            /^exp:\/\//,
            /^http:\/\/192\.168\./,
            /^https:\/\/.*\.exp\.direct$/,
            /^http:\/\/localhost:/,
            /^https:\/\/localhost:/,
        ],
        credentials: true,
        optionsSuccessStatus: 200,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS', 'HEAD'],
        allowedHeaders: [
            'Content-Type',
            'Authorization',
            'Accept',
            'X-Requested-With',
            'Origin'
        ]
    };

app.use(cors(corsOptions));

if (process.env.NODE_ENV === 'production') {
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS, HEAD');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

        if (req.method === 'OPTIONS') {
            res.status(200).end();
            return;
        }
        next();
    });
}

app.use(express.json({ limit: "10mb" })); // Limitar tamaño del body a 10mb
app.use(express.urlencoded({ extended: true }));

// Swagger Documentation
app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec, {
        customCss: ".swagger-ui .topbar { display: none }",
        customSiteTitle: "RentaYa API Documentation",
    }),
);

// Swagger JSON endpoint
app.get("/api-docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "ok",
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        environment: process.env.NODE_ENV || 'development',
        version: process.env.npm_package_version || '1.0.0',
        memory: process.memoryUsage()
    });
});

// Inicializar cron jobs
if (process.env.NODE_ENV === 'production') {
    const cronService = CronService.getInstance();
    cronService.startAllJobs();
    console.log('Cron jobs iniciados para producción');
}

app.use("/api/auth", authRoutes);
app.use("/api/properties", propertyRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/interests", interestRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/reports", reportRoutes);
app.use("/api/notifications", notificationRoutes);

app.use(errorHandler);

export default app;
