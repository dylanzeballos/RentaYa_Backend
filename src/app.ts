import express, {Express} from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';


import { errorHandler } from '@/shared/infrastructure/middleware/errorHandler';

//Rutas de features
import authRoutes from '@/features/auth/infrastructure/routes/auth.routes';

const app: Express= express();

app.use(helmet());
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true,
}));

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // maximo 100 requests por IP por ventana
});
app.use(limiter);

app.use(express.json({ limit: '10mb' })); // Limitar tamaño del body a 10mb
app.use(express.urlencoded({ extended: true }));

app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'OK',
        timestamp: new Date().toISOString(),
    });
});

app.use('/api/auth', authRoutes);

/* app.use('*', (req, res) => {
    res.status(404).json({
        success: false,
        message: `Ruta ${req.originalUrl} no encontrada`,
    });
}); */

app.use(errorHandler);

export default app;