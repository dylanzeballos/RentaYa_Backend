import { Router } from "express";
import { InmuebleController } from "../controllers/InmuebleController";
import { authMiddleware } from "@/shared/infrastructure/middleware/AuthMiddleware";
import { ImageUploadService } from "@/shared/infrastructure/services/ImageUploadService";

const router = Router();
const inmuebleController = new InmuebleController();
const imageUploadService = new ImageUploadService();

router.get("/", inmuebleController.listInmuebles);
router.get("/:id", inmuebleController.getInmuebleDetail);

router.post(
  "/",
  authMiddleware.authenticate,
  imageUploadService.upload.array("photos", 10),
  inmuebleController.createInmueble
);

router.put(
  "/:id",
  authMiddleware.authenticate,
  imageUploadService.upload.array("photos", 10),
  inmuebleController.updateInmueble
);

router.delete("/:id", authMiddleware.authenticate, inmuebleController.deleteInmueble);

export default router;