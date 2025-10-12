"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const errorHandler_1 = require("@/shared/infrastructure/middleware/errorHandler");
//Rutas de features
const auth_routes_1 = __importDefault(require("@/features/auth/infrastructure/routes/auth.routes"));
const app = (0, express_1.default)();
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true,
}));
const limiter = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // maximo 100 requests por IP por ventana
});
app.use(limiter);
app.use(express_1.default.json({ limit: '10mb' })); // Limitar tamaño del body a 10mb
app.use(express_1.default.urlencoded({ extended: true }));
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'OK',
        timestamp: new Date().toISOString(),
    });
});
app.use('/api/auth', auth_routes_1.default);
/* app.use('*', (req, res) => {
    res.status(404).json({
        success: false,
        message: `Ruta ${req.originalUrl} no encontrada`,
    });
}); */
app.use(errorHandler_1.errorHandler);
exports.default = app;
//# sourceMappingURL=app.js.map