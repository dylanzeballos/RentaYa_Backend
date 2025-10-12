"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const InmuebleRepository_1 = require("../repositories/InmuebleRepository");
const CreateInmubleUseCase_1 = require("@/features/inmueble/application/usecases/CreateInmubleUseCase");
const InmubleController_1 = require("../controllers/InmubleController");
const validateSchema_1 = require("@/shared/infrastructure/validation/validateSchema");
const inmuebleSchema_1 = require("../validation/inmuebleSchema");
const router = (0, express_1.Router)();
const repo = new InmuebleRepository_1.InmuebleRepository();
const createUseCase = new CreateInmubleUseCase_1.CreateInmuebleUseCase(repo);
const controller = new InmubleController_1.InmuebleController(createUseCase);
router.post('/Inmuebles', (0, validateSchema_1.validateSchema)(inmuebleSchema_1.createInmuebleSchema), controller.inmueble);
exports.default = router;
//# sourceMappingURL=inmueble.routes.js.map