import { Router } from 'express';
import { ReportController } from '../controllers/ReportController';
import { validateCreateReport } from '../validation/report.validation';
import { authMiddleware } from "@/shared/infrastructure/middleware/AuthMiddleware";

const router = Router();
const reportController = new ReportController();

router.post('/', authMiddleware.authenticate, validateCreateReport, reportController.createReport);
router.get('/:userId/:propertyId', authMiddleware.authenticate, reportController.getReportsByUserAndProperty);

export default router;
