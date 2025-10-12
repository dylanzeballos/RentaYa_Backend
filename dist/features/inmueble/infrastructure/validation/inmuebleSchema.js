"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listInmueblesSchema = exports.createInmuebleSchema = void 0;
const zod_1 = require("zod");
exports.createInmuebleSchema = zod_1.z.object({
    body: zod_1.z.object({
        titulo: zod_1.z.string()
            .min(3, 'El título debe tener al menos 3 caracteres')
            .max(100, 'El título no debe exceder los 100 caracteres'),
        descripcion: zod_1.z.string()
            .optional(),
        direccion: zod_1.z.string()
            .regex(/^[a-zA-Z0-9\s,'-]*$/, 'La dirección contiene caracteres inválidos')
            .max(50, 'La dirección no debe exceder los 50 caracteres'),
        ciudad: zod_1.z.string()
            .optional(),
        dormitorios: zod_1.z.number()
            .int()
            .positive()
            .optional(),
        banos: zod_1.z.number()
            .int()
            .positive()
            .optional(),
        areaM2: zod_1.z.number()
            .positive()
            .optional(),
        precio: zod_1.z.number()
            .positive(),
        tipoOperacion: zod_1.z.enum(['alquiler', 'anticretico']),
        fotos: zod_1.z.array(zod_1.z.string().url()).optional(),
    })
});
exports.listInmueblesSchema = zod_1.z.object({
    query: zod_1.z.object({
        page: zod_1.z.string().optional(),
        limit: zod_1.z.string().optional(),
        ciudad: zod_1.z.string().optional(),
        tipoOperacion: zod_1.z.string().optional(),
        minPrecio: zod_1.z.string().optional(),
        maxPrecio: zod_1.z.string().optional(),
    })
});
//# sourceMappingURL=inmuebleSchema.js.map