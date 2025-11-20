import express, { Express } from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "@/config/swagger";

import { errorHandler } from "@/shared/infrastructure/middleware/errorHandler";

//Rutas de features
import authRoutes from '@/features/auth/infrastructure/routes/auth.routes';
import propertyRoutes from '@/features/property/infrastructure/routes/property.routes';
import reviewRoutes from '@/features/property/infrastructure/routes/review.routes';
import usersRoutes from '@/features/user/infrastructure/routes/user.routes';
import reportRoutes from '@/features/report/infrastructure/routes/report.route';
import notificationRoutes from '@/features/notification/infrastructure/routes/notification.routes';

const app: Express = express();

app.use(helmet());
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:8081",
    credentials: true,
  }),
);

const limiter = rateLimit({
  windowMs: 600 * 60 * 1000, // 15 minutes
  max: 700, // maximo 100 requests por IP por ventana
});
app.use(limiter);

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
    status: "OK",
    timestamp: new Date().toISOString(),
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/properties", propertyRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/reports", reportRoutes);
app.use("/api/notifications", notificationRoutes);

/* app.use('*', (req, res) => {
    res.status(404).json({
        success: false,
        message: `Ruta ${req.originalUrl} no encontrada`,
    });
}); */

app.use(errorHandler);

export default app;
