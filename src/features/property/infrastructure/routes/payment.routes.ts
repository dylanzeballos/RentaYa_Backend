import { Router } from 'express';
import { PaymentController } from '../controllers/PaymentController';
import { validateCreatePayment } from '../validation/payment.validation';
import { authMiddleware } from "@/shared/infrastructure/middleware/AuthMiddleware";

const router = Router();
const paymentController = new PaymentController();

router.post('/', authMiddleware.authenticate, validateCreatePayment, paymentController.createPayment);
router.get('/', authMiddleware.authenticate, paymentController.getPayments);

export default router;
